<template>
  <div>
    <span id="typed-output">{{ typedText }}</span>
  </div>
</template>

<script>
import Typed from 'typed.js';
import * as CONFIG from "../config";
export default {
  name: 'TypedText',
  data() {
    return {
      typedText: ''
    };
  },
  mounted() {
    this.fetchAndInitTyped();
  },
  methods: {
    fetchAndInitTyped() {
      this.fetchData().then(hitokoto => {
        this.initTyped(hitokoto);
      });
    },
    fetchData() {
      return fetch(CONFIG.randomHitokotoAPI)
        .then(res => res.json())
        .then(({ hitokoto }) => hitokoto)
        .catch(err => {
          console.error(err);
        });
    },
    initTyped(input) {
      const options = {
        strings: [input],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        shuffle: false,
        smartBackspace: true,
        onLastStringBackspaced: () => {this.fetchAndInitTyped();},
        startDelay: 500,
        backDelay: 5000,
      };

      if (this.typed) {
        this.typed.destroy();
      }
      this.typed = new Typed('#typed-output', options);
    },

    initTypedFromAPI() {
      this.fetchData().then(hitokoto => {
        this.initTyped(hitokoto);
      });
    }
  },
  beforeUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }
};
</script>
