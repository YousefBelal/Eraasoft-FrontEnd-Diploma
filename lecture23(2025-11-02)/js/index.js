//consts
const MIN_AC_TEMP = 16;
const MAX_AC_TEMP = 29;
const MIN_AC_FAN_SPEED = 1;
const MAX_AC_FAN_SPEED = 3;

//intial values
let airConditionerStatus = false;
let airConditionerTemp = MIN_AC_TEMP;
let airConditionerFanSpeed = MIN_AC_FAN_SPEED;
let fanSpeedDirection = "+";

function toggleAC() {
  if (airConditionerStatus == false) {
    console.log("the Air Conditioner is ON");
    console.log(`the AC Temp is ${airConditionerTemp}`);
    console.log(`the AC Fan Speed is ${airConditionerFanSpeed}`);
    airConditionerStatus = true;
  } else {
    console.log("the Air Conditioner is OFF");
    airConditionerStatus = false;
    fanSpeedDirection = "+";
  }
}

function increaseTemp() {
  if (airConditionerStatus == true) {
    if (airConditionerTemp < MAX_AC_TEMP) {
      airConditionerTemp++;
      console.log(`the AC Temp is ${airConditionerTemp}`);
    } else {
      alert("Max Temp");
    }
  } else {
    alert("can't Increase Temp if the AC is OFF");
  }
}

function decreaseTemp() {
  if (airConditionerStatus == true) {
    if (airConditionerTemp > MIN_AC_TEMP) {
      airConditionerTemp--;
      console.log(`the AC Temp is ${airConditionerTemp}`);
    } else {
      alert("Min Temp");
    }
  } else {
    alert("can't Decrease Temp if the AC is OFF");
  }
}

function changeFanSpeed() {
  if (airConditionerStatus == true) {
    if (fanSpeedDirection == "+") {
      if (airConditionerFanSpeed < MAX_AC_FAN_SPEED) {
        airConditionerFanSpeed++;
      } else {
        fanSpeedDirection = "-";
        airConditionerFanSpeed--;
      }
    } else {
      if (airConditionerFanSpeed > MIN_AC_FAN_SPEED) {
        airConditionerFanSpeed--;
      } else {
        fanSpeedDirection = "+";
        airConditionerFanSpeed++;
      }
    }
    console.log(`AC Fan Speed is ${airConditionerFanSpeed}`);
  } else {
    alert("can't change Fan Speed if the AC is OFF");
  }
}
