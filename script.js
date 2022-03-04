const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const SHIPS = [ ["Aircraft Carrier", 5], 
                ["Battleship", 4], 
                ["Destroyer", 3],
                ["Submarine", 3],
                ["Patrol Boat", 2]]

function initialize ()
{
    playerBoard = [];
    computerBoard = [];
    selected = "";
    startGame = false;
    clickable ("p");
    clickable ("");
    randomBoard ();
}

function start ()
{
    startGame = true;
}

function clickable (user)
{
    for (var i = 0; i < 10; i++)
    {
        for (var k = 1; k <= 10; k++)
        {
            document.getElementById (user + LETTERS [i] + k).addEventListener ("click", function ()
            {
                if (!startGame)
                {
                    this.setAttribute('style', 'background-color: #d0f8ff');
                    playerBoard.push (this);
                    // console.log ("1");
                }
                else
                {
                    hit (this);
                }
            })
        }
    }
}

function hit (cell)
{
    for (var i = 0; i < playerBoard.length; i++)
    {
        if (cell == playerBoard [i])
        {
            cell.setAttribute('style', 'background-color: #FFE7FE');
            return;
        }
    }
    cell.setAttribute('style', 'background-color: #FFFFD1');
}

function randomBoard ()
{
    // document.getElementById ("A1").setAttribute('style', 'background-color: #d0f8ff');
    var randomLetter = parseInt (Math.random () * 10);
    var randomNumber = parseInt (Math.random () * 10);
    var HV = parseInt (Math.random () * 2)
    var num = 0;
    // console.log (SHIPS [1][1]);

    while (num < SHIPS.length)
    {
        if (HV == 0) // Horizontal
        {
            for (var i = 0; i < SHIPS [num][1]; i++)
            {
                document.getElementById ("" + LETTERS [randomLetter] + randomNumber).setAttribute('style', 'background-color: #d0f8ff');
                computerBoard.push ("" + LETTERS [randomLetter] + randomNumber);
                randomNumber++;
            }
        }
        else // Vertical
        {
            for (var i = 0; i < SHIPS [num][1]; i++)
            {
                document.getElementById ("" + LETTERS [randomLetter] + randomNumber).setAttribute('style', 'background-color: #d0f8ff');
                computerBoard.push ("" + LETTERS [randomLetter] + randomNumber);
                randomLetter++;
            }
        }
        randomLetter = parseInt (Math.random () * 10);
        randomNumber = parseInt (Math.random () * 10);
        HV = parseInt (Math.random () * 2)
        num++;
    }
}

function checkSpace ()
{

}
