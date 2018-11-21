<template>
  <div id="area-details" class="container">
      <h3 class="title">Area Overview</h3>
      <AreaDetails  class="area"
                    :class="{ hide : isHidden }"
                    :name="this.areas[countIncrease].name"
                    :quote="this.areas[countIncrease].quote"
                    :img="this.areas[countIncrease].img.src">
      </AreaDetails>
      <button type="button" @click="$router.push('areas')">
        Find Out More
      </button>
  </div>
</template>

<script>
import AreaDetails from './areaDetails'
import eastside from '@/assets/img/eastsideimg.jpg'
import westside from '@/assets/img/westsideimg.jpg'
import fivepoints from '@/assets/img/fivepointsimg.jpg'
import normaltown from '@/assets/img/normaltownimg.jpg'
import oconee from '@/assets/img/oconeeimg.jpg'
import walton from '@/assets/img/waltonimg.jpg'
import jackson from '@/assets/img/jacksonimg.jpg'
import barrow from '@/assets/img/barrowimg.jpg'
import madison from '@/assets/img/madisonimg.jpg'

export default {
  components: {
    AreaDetails
  },
  data () {
    return {
      isHidden: false,
      countIncrease: 0,
      areas: [
        {
          name: 'East Athens',
          img: eastside,
          quote: 'Family friendly living - not far from Athens excitement',
          params: 'east-athens'
        },
        {
          name: 'West Athens',
          img: westside,
          quote: 'Convenience and proximity to 316',
          params: 'west-athens'
        },
        {
          name: '5 Points Athens',
          img: fivepoints,
          quote: 'Elegant living, tree-lined streets, right in the middle of it all',
          params: 'five-points-athens'
        },
        {
          name: 'Normaltown Athens',
          img: normaltown,
          quote: 'Hip living on the quirky side of town',
          params: 'normaltown-athens'
        },
        {
          name: 'Oconee County',
          img: oconee,
          quote: 'The envy of the state - voted #1 school system in Georgia',
          params: 'oconee'
        },
        {
          name: 'Barrow County',
          img: barrow,
          quote: 'One of the fastest growing counties in Georgia',
          params: 'barrow'
        },
        {
          name: 'Jackson County',
          img: jackson,
          quote: 'Growing community, excellent schools, access to I-85, and the feel of a small town',
          params: 'jackson'
        },
        {
          name: 'Walton County',
          img: walton,
          quote: 'Peaceful country living with a blend of suburban convenience',
          params: 'walton'
        },
        {
          name: 'Madison County',
          img: madison,
          quote: 'Small town country living at its finest',
          params: 'madison'
        }
      ]
    }
  },
  methods: {
    increaseCount () {
      setInterval(() => {
        this.isHidden = true
        setTimeout(() => {
          if (this.countIncrease < this.areas.length - 1) {
            this.countIncrease += 1
          } else {
            this.countIncrease = 0
          }
          this.isHidden = false
        }, 750);
      }, 10000)
    }
  },
  created () {
    this.areas.forEach(area => {
      let image = new Image()
      image.src = area.img
      area.img = image
    })
  },
  mounted () {
    this.increaseCount()
  }
}
</script>

<style scoped>
  #area-details {
    height: 350px;
    min-width: 300px;
    padding: 25px 5px 25px 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    color: var(--leather);
  }

  .area {
    flex: 1;
    opacity: 1;
    transition: 750ms all;
  }

  .hide {
    opacity: 0;
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
