<template>
  <div>
    <Header title="Mortgage Affordability Calculator"></Header>
    <div id="mortgage" class="container">

      <div class="box">
        <div class="label">
          <p>Loan Term</p>
        </div>
        <div class="input">
          <input id="15" class="radio-btn" type="radio" name="loanTerm" value="15" v-model="loanTerm">
          <label class="radio" for="15">15 year</label>
          <input id="20" class="radio-btn" type="radio" name="loanTerm" value="20" v-model="loanTerm">
          <label class="radio" for="20">20 year</label>
          <input id="30" class="radio-btn" type="radio" name="loanTerm" value="30" v-model="loanTerm" checked="true">
          <label class="radio" for="30">30 year</label>
        </div>
      </div>
      <div class="box">
        <div class="label">
          <p>Monthly Household Pre-Tax Income</p>
        </div>
        <div class="input currency">
          <input type="text" @blur="formatIncome" v-model.number="income">
        </div>
      </div>
      <div class="box">
        <div class="label">
          <p>Monthly Debt Expenses</p>
        </div>
        <div class="input currency">
          <input type="text" @blur="formatExpenses" v-model.number="expenses">
        </div>
      </div>
      <div class="box">
        <div class="label">
          <p>Down Payment</p>
        </div>
        <div class="input currency">
          <input type="text" @blur="formatDownPayment" v-model.number="downPayment">
        </div>
      </div>
      <div class="box">
        <div class="label">
          <p>Interest Rate</p>
        </div>
        <div class="input percentage">
          <input type="text" v-model.number="interest">
        </div>
      </div>
      <div class="box">
        <div class="label">
          <p>Property Taxes</p>
        </div>
        <div class="input percentage">
          <input type="text" v-model.number="taxes">
        </div>
      </div>
      <div class="box">
        <div class="label">
          <p>Home Insurance</p>
        </div>
        <div class="input percentage">
          <input type="text" v-model.number="insurance">
        </div>
      </div>
      <div class="submit">
        <button @click="calculate">Calculate</button>
      </div>

      <div id="results">

        <h4>Estimated Home Price</h4>
        <h2>${{ Math.round(price).toLocaleString() }}</h2>

        <h5>Loan Amount</h5>
        <h3>${{ Math.round(loan).toLocaleString() }}</h3>

        <h5>Down Payment</h5>
        <h3>${{ downPayment.toLocaleString() }}</h3>

        <hr>

        <h4>Your Monthly Payment</h4>
        <h2>${{ Math.round(monthlyPayment).toLocaleString() }}</h2>

        <h5>Principal &amp; Interest</h5>
        <h3>${{ Math.round(principal).toLocaleString() }}</h3>

        <h5>Taxes &amp; Insurance</h5>
        <h3>${{ Math.round(taxPayment).toLocaleString() }}</h3>

        <h5>PMI</h5>
        <h3>${{ Math.round(pmi).toLocaleString() }}</h3>

      </div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'

export default {
  components: {
    Header
  },
  data () {
    return {
      loanTerm: '30',
      income: '3,750',
      expenses: '290',
      downPayment: '2,000',
      interest: '4.68',
      taxes: '1.07',
      insurance: '1.0',
      price: '',
      loan: '',
      monthlyPayment: '',
      principal: '',
      taxPayment: '',
      pmi: 0
    }
  },
  created () {
    this.calculatePrincipalPayment()
    this.calculateLoanAmount()
    this.calculateHomePrice()
    this.calculateMonthlyPayment()
  },
  methods: {
    calculate () {
      this.calculatePrincipalPayment()
      this.calculateLoanAmount()
      this.calculateHomePrice()
      this.calculateMonthlyPayment()
      this.scrollToResults()
    },
    calculatePrincipalPayment () {
      let income = parseFloat(this.income.replace(/,/g, ''))
      let expenses = parseFloat(this.expenses.replace(/,/g, ''))
      let debtToIncome = expenses / income
      let housingExpense = 0.33 - debtToIncome
      this.principal = income * housingExpense
    },
    calculateLoanAmount () {
      let n = parseFloat(this.loanTerm) * 12
      let m = parseFloat(this.principal)
      let r = (parseFloat(this.interest) / 100) / 12
      let discount = (Math.pow((1 + r), n) - 1) / (r * Math.pow((1 + r), n))
      this.loan = m * discount
    },
    calculateHomePrice () {
      let downPayment = parseFloat(this.downPayment.replace(/,/g, ''))
      this.price = this.loan + downPayment
    },
    calculateMonthlyPayment () {
      let taxes = ((this.price * .4) * (parseFloat(this.taxes) / 100)) / 12
      let insurance = ((this.price) * (parseFloat(this.insurance) / 100)) / 12
      let downPercentage = parseFloat(this.downPayment.replace(/,/g, '')) / this.price
      if (downPercentage < .2) {
        this.pmi = parseFloat((this.price * .01) / 12)
      } else {
        this.pmi = 0
      }
      this.taxPayment = taxes + insurance
      this.monthlyPayment = this.taxPayment + this.principal + this.pmi
    },
    formatIncome () {
      this.income = this.income.toLocaleString()
    },
    formatExpenses () {
      this.expenses = this.expenses.toLocaleString()
    },
    formatDownPayment () {
      this.downPayment = this.downPayment.toLocaleString()
    },
    scrollToResults () {
      let results = document.getElementById('results')
      results.scrollIntoView()
    }
  }
}
</script>

<style scoped>
  #mortgage {
    padding-top: 100px;
    flex-flow: column nowrap;
    align-items: center;
  }

  .box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding-bottom: 10px;
  }

  .label {
    padding-right: 15px;
    width: 280px;
  }

  .input {
    width: 280px;
  }

  .currency:before {
    content: '$';
    padding: 5px;
    position: absolute;
  }

  .percentage {
    position: relative;
  }

  .percentage:after {
    content: '%';
    right: 0;
    top: 0;
    padding: 5px;
    position: absolute;
  }

  input {
    width: 95%;
    padding: 5px 0 5px 20px;
  }

  .radio {
    background-color: #fff;
    color: var(--midnight);
    padding: 5px;
    display: inline-block;
    width: 80px;
    border-radius: 5px;
    border: thin solid var(--midnight);
    border-bottom: none;
    border-top: none;
    cursor: pointer;
    text-align: center;
    transition: 250ms all;
  }

  .radio-btn {
    position: fixed;
    opacity: 0;
    width: 0;
  }

  input[type="radio"]:checked + label {
    background-color: var(--midnight);
    color: #fff;
    transform: scale(1.1);
  }

  button {
    background-color: #fff;
    width: 250px;
    padding: 5px;
    font-size: 18px;
    transition: 250ms all;
    color: var(--coral);
    border: thin solid var(--coral);
    border-radius: 10px;
    border-top: none;
    border-bottom: none;
    margin-top: 15px;
  }

  button:hover {
    color: var(--leather);
    background-color: var(--coral);
    transform: scaleX(1.05);
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  #results {
    text-align: center;
    margin-top: 20px;
  }

  h2, h3 {
    margin-top: 0;
  }

  h4, h5 {
    margin-bottom: 0;
  }
</style>
