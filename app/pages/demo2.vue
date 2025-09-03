<script setup></script>

<template>
  <div>
  <span>拟态</span>
  card:
  <div class="card">
    <h3>Card Title</h3>
    <p>This is a card with neumorphism style.</p>
    button:
    <button>click</button>
    switch:
    <label class="label">
      <div class="toggle">
        <input
          class="toggle-state"
          type="checkbox"
          name="check"
          value="check"
        />
        <div class="indicator"></div>
      </div>
    </label>
    checkbox:
    <label class="checkbox-label">
      <input type="checkbox" class="checkbox-input" />
      <span class="checkbox-custom">
        <svg class="checkmark" viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span class="checkbox-text">Check me</span>
    </label>
    input:
    <input type="text" class="input-field" placeholder="Enter text" />
    textarea:
    <textarea class="input-field" placeholder="Enter text" />
    radio:
    <label class="radio-label">
      <input type="radio" class="radio-input" name="radio" />
      <span class="radio-custom"></span>
      <span class="radio-text">Option 1</span>
    </label>
    <label class="radio-label">
      <input type="radio" class="radio-input" name="radio" />
      <span class="radio-custom"></span>
      <span class="radio-text">Option 2</span>
    </label>
  </div>
  </div>
</template>

<style scoped>
  button {
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #ecf0f3;
    cursor: pointer;
    border: none;
    transition: all 0.3s;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  }

  button:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: #394a56;
  }

  .label-text {
    margin-left: 16px;
  }

  .toggle {
    isolation: isolate;
    position: relative;
    height: 30px;
    width: 60px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
  }

  .toggle-state {
    display: none;
  }

  .indicator {
    height: 100%;
    width: 200%;
    background: #ecf0f3;
    border-radius: 15px;
    transform: translate3d(-75%, 0, 0);
    transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  }

  .toggle-state:checked ~ .indicator {
    transform: translate3d(25%, 0, 0);
  }

  .card {
    background: #ecf0f3;
    border-radius: 1em;
    padding: 1.5em;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
    transition: all 0.3s;
  }

  .card h3 {
    margin: 0;
    font-size: 1.5em;
    color: #090909;
  }

  .card p {
    color: #666;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 1em;
  }

  .checkbox-input {
    display: none;
  }

  .checkbox-custom {
    width: 20px;
    height: 20px;
    background: #ecf0f3;
    border-radius: 5px;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
    transition: all 0.3s;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox-input:checked + .checkbox-custom {
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }

  .checkmark {
    display: none;
    fill: none;
    stroke: #090909;
    stroke-width: 2px;
  }

  .checkbox-input:checked + .checkbox-custom .checkmark {
    display: block;
  }

  .checkbox-text {
    color: #090909;
  }

  .input-field {
    padding: 0.7em 1em;
    font-size: 16px;
    border-radius: 0.5em;
    background: #ecf0f3;
    border: none;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
    transition: all 0.3s;
    margin-top: 1em;
  }

  .input-field:focus {
    outline: none;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }

  .radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 1em;
  }

  .radio-input {
    display: none;
  }

  .radio-custom {
    width: 20px;
    height: 20px;
    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
    transition: all 0.3s;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .radio-input:checked + .radio-custom {
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }

  .radio-input:checked + .radio-custom::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #090909;
    border-radius: 50%;
  }

  .radio-text {
    color: #090909;
  }
</style>
