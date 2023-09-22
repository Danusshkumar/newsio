import React, { useState,useEffect } from 'react';

function Weather() {
    return (
  <div>
  <div class="dark-mode">
    <span class="dark-mode-btn">
      <i class="bx bx-moon"></i>
    </span>
  </div>

  <div class="color-palette">
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
    <span class="theme-color"></span>
  </div>

  <div class="wrapper">
    <header><i class="bx bx-left-arrow-alt"></i>Weather App</header>
    <section class="input-part">
      <p class="info-txt"></p>
      <div class="content">
        <input
          type="text"
          spellcheck="false"
          placeholder="Enter City Name"
          required
        />
        <div class="separator"></div>
        <button>Location auto-detect</button>
      </div>
    </section>
    <section class="weather-part">
      <img src="" alt="Weather Icon" />
      <div class="temp">
        <span class="numb">_</span>
        <span class="deg">°</span>C
      </div>
      <div class="weather">_ _</div>
      <div class="location">
        <i class="bx bx-map"></i>
        <span>_, _</span>
      </div>
      <div class="bottom-details">
        <div class="column feels">
          <i class="bx bxs-thermometer"></i>
          <div class="details">
            <div class="temp">
              <span class="numb-2">_</span>
              <span class="deg">°</span>C
            </div>
            <p>Feels like</p>
          </div>
        </div>
        <div class="column humidity">
          <i class="bx bxs-droplet-half"></i>
          <div class="details">
            <span>_</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <script src="js/script.js"></script>
  <script src="js/api_key.js"></script>
</div>

    );
}

export default Weather;