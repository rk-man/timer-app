1. user is prompted with an input element that lets them select the time in the future
2. When the user selects start Timer, we need to check if the time set is valid
   -> entered time is in the future
3. New component named timer is rendered which holds all the hours, minutes, seconds left
4. There will also be pause timer and resume timer -> makes sure that when paused and resumed, we need to reset the time left

5. On the timer page
   -> Everytime the page opens up, we need to set the currentTime and pass it down to the TimerInfo component
   -> When the TimerInfo component is rendered for the first time, using the current Time we need to subtract it with the time that has been set
   -> Timer should start running and should stop the second we reached the desired time
