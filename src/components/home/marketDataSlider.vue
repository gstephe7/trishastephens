<template>
  <div id="market-data" class="container">
    <h3 class="market-data-title">Current Median Home Value</h3>
    <div class="container data-div">
      <MarketData class="county-data"
                  :class="{ hide : isHidden }"
                  :county="this.counties[countIncrease].name"
                  :price="this.counties[countIncrease].price"
                  :arrow="this.counties[countIncrease].arrow"
                  :img="this.counties[countIncrease].img.src">
      </MarketData>
    </div>
    <button type="button" @click="$router.push('HomeValue')">
        Find Your Home's Value
    </button>

  </div>
</template>

<script>
import api from '@/api/api'
import MarketData from './marketData'
import oconee from '@/assets/img/oconee.png'
import clarke from '@/assets/img/clarke.png'
import jackson from '@/assets/img/jackson.png'
import barrow from '@/assets/img/barrow.png'
import walton from '@/assets/img/walton.png'
import madison from '@/assets/img/madison.png'

export default {
  components: {
    MarketData
  },
  data () {
    return {
      isHidden: false,
      countIncrease: 0,
      counties: [
        {
          name: 'Oconee',
          price: '654,198',
          arrow: 'sort-up',
          img: oconee
        },
        {
          name: 'Clarke',
          price: '210,558',
          arrow: 'sort-down',
          img: clarke
        },
        {
          name: 'Jackson',
          price: '367,132',
          arrow: 'sort-up',
          img: jackson
        },
        {
          name: 'Barrow',
          price: '187,445',
          arrow: 'sort-up',
          img: barrow
        },
        {
          name: 'Walton',
          price: '134,221',
          arrow: 'sort-down',
          img: walton
        },
        {
          name: 'Madison',
          price: '121,983',
          arrow: 'sort-down',
          img: madison
        }
      ]
    }
  },
  methods: {
    increaseCount () {
      setInterval(() => {
        this.isHidden = true
        setTimeout(() => {
          if (this.countIncrease < this.counties.length - 1) {
            this.countIncrease += 1
          } else {
            this.countIncrease = 0
          }
          this.isHidden = false
        }, 500);
      }, 3000)
    }
  },
  created () {
    this.counties.forEach(county => {
      let image = new Image()
      image.src = county.img
      county.img = image
    })
  },
  beforeMount () {
    api.getAreaValues = () => {
      api.axios.get(`${api.baseURL}/areaValues`)
        .then((res) => {
          res.data.forEach(newItem => {
            this.counties.forEach(oldItem => {
              if (newItem.name === oldItem.name) {
                oldItem.price = newItem.newValue.toLocaleString()
                if (newItem.increased) {
                  oldItem.arrow = 'sort-up'
                } else {
                  oldItem.arrow = 'sort-down'
                }
              }
            })
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    api.getAreaValues()
  },
  mounted () {
    this.increaseCount()
  }
}
</script>

<style scoped>
  #market-data {
    height: 350px;
    min-width: 300px;
    padding: 25px 5px 25px 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .market-data-title {
    color: var(--leather);
  }

  .county-data {
    flex: 1;
    min-width: 300px;
    opacity: 1;
    transition: 500ms all;
  }

  .hide {
    opacity: 0;
    transform: translateY(25px);
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
  }

  button:hover, button:focus {
    color: var(--leather);
    background-color: var(--coral);
    transform: scaleX(1.05);
    cursor: pointer;
    outline: none;
  }

</style>
