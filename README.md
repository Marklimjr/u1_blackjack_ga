** CURRENT TAST **

Sketching wire frame off screen

---

USER STORY

---

START SCREEN -> "CASH IN"
User is prompted with a drop down menu with values from 100-500
increasing in values of 100.

User presses start button to confirm

WAGER SCREEN -> "WAGER"

The selected cash in current value is reflected on the top right of screen
User is prompted with 3 buttons of values 25 / 50 / 100
when button is clicked, total wager value will update on screen.
If wager value > current value, wager value will not update
(if button(25) is pressed and wagervalue < current value, wager value + 25. ELSE wagervalue = current wagervalue)

User clicks "submit" and proceeds to next screen

GAME SCREEN -> "GAME"

Board will have 2 cards dealt for user and dealer, dealer has one closed. Wager amount is shown in the middle of both pair of cards

User will be given the choice to hit or stand, stand option will not be available if user card value < 16.

If User gets value "ACE" -> prompted to choose value of 1/10/11 -> assign value to user card value

If dealer/user = blackjack -> go to W/L/DRAW screen

GAME SCREEN -> "USER HIT < 21"

User can choose to hit or stand

GAME SCREEN -> "USER HIT < 21"

User loses -> goes to W/L screen

GAME SCREEN -> "USER STAND >16"

Dealer second card is revealed. (delay 500)
-> goes to dealer compute

GAME SCREEN -> "DEALER compute"
if dealer < 15 , dealer hits
if dealer >= 16 %% < User value. dealer hits
if dealer <= 21 && dealer > User value , user loses -> goes to W/L screen
if dealer > 21 , user wins -> goes to W/L

if dealer value === user value -> goes to DRAW

W/L SCREEN
If dealer win -> current value - wager value
wager on screen dissappears.

if User win -> current balance value + wager value
wager value shows "+" inline.

if draw -> wager value remains on screen, no changes to balance current value .

Button -> Play again? -> returns to wager screen.

BRB taking 20 min power nap till 11:15

METHOD APPROACH

Main ->
run wager system
run game system
currentbalance = current wager value

wager system ->

set wagerValue = 0

button 1 = 25
button 2 = 50
button 3 = 100

Attach event listener to class of buttons
function add value(buttonVal)
if button 1 = button 1 + current balance

if win, current value + wagerValue
if lose, current value - wagerValue

Game System ->
run card system
run game

const cards =
[DIAMONDS : [1,2,3,4,5,6,7,8,10,11,12,13]
[CLUBS : [1,2,3,4,5,6,7,8,10,11,12,13]
[HEARTS : [1,2,3,4,5,6,7,8,10,11,12,13]
[SPADES : [1,2,3,4,5,6,7,8,10,11,12,13]

const dealerHand = []
const userHand = []

    dealCard() = pick random card from cardsGame. pop card out of array. // to be decided later
    make copy of const cards array to cardsGame.

    dealCard() = pick random value from cardsGame. pop value out of array.

    dealCard() X 4

    Compute() = Detects for instant win from dealer draw and user draw.
