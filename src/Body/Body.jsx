import { useState } from 'react';
import './Body.css';



function Body() {

  

  const [resultDeclare, setResultDeclare] = useState(false);

  function COMPUTER_TAKING_CHANCE() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    if (
      document.querySelector('#cross_' + randomNumber).style.display === 'none' &&
      document.querySelector('#circle_' + randomNumber).style.display === 'none'
    ) {
      document.querySelector('#circle_' + randomNumber).style.display = 'flex';
      document.querySelector('#restart').style.display = 'flex';
    } else {
      COMPUTER_TAKING_CHANCE();
    }
      document.querySelector('#Blur').style.display = 'none';

    Result_check();
  }

  function RESTART() {

     document.querySelector('#box').style.display = "flex";
     document.querySelector('#loss_box').style.display = "none";
     document.querySelector('#Win_box').style.display = "none";

    for (let i = 1; i < 10; i++) {
      document.querySelector('#circle_' + i).style.display = 'none';
      document.querySelector('#cross_' + i).style.display = 'none';
    }
    setResultDeclare(false);
  }





  function USERCHANCE(id) {


    document.querySelector('#Blur').style.display = 'flex';
    document.querySelector('#' + id).style.display = 'flex';

    const gameOver = Result_check(); 

    if (!gameOver) {
      setTimeout(() => {
        COMPUTER_TAKING_CHANCE();
      }, 1000);
    }
  }





  function Result_check() {
    const wins = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [7, 5, 3],
    ];

    for (let combo of wins) {
     
     // user win check
      if (
        combo.every((i) => document.querySelector('#cross_' + i).style.display === 'flex')
      ) {
        setResultDeclare(true);
        document.querySelector('#box').style.display = "none";
        document.querySelector('#loss_box').style.display = "none";
        document.querySelector('#Win_box').style.display = "flex";
        return true;
      }
    }

    // user loss check
    for (let combo of wins) {
      if (
        combo.every((i) => document.querySelector('#circle_' + i).style.display === 'flex')
      ) {
        setResultDeclare(true);
        document.querySelector('#box').style.display = "none";
        document.querySelector('#loss_box').style.display = "flex";
        document.querySelector('#Win_box').style.display = "none";
        return true;
      }
    }

    return false;
  }

  return (
    <div id="Body">
      <div id="B_part_1">
        <div id="Win_box" style={{display:"none"}}>YOU WIN !!!</div>
         <div id="loss_box" style={{display:"none"}}>YOU LOSS!!!</div>
        <div id="box">
          <div id="box_p_1">
            <div id="box_p_1_1" onClick={() => USERCHANCE('cross_1')}>
              <div id="cross_1" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_1" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
            <div id="box_p_1_2"></div>
            <div id="box_p_1_3" onClick={() => USERCHANCE('cross_2')}>
              <div id="cross_2" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_2" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
            <div id="box_p_1_4"></div>
            <div id="box_p_1_5" onClick={() => USERCHANCE('cross_3')}>
              <div id="cross_3" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_3" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
          </div>
          <div id="box_p_2"></div>
          <div id="box_p_3">
            <div id="box_p_3_1" onClick={() => USERCHANCE('cross_4')}>
              <div id="cross_4" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_4" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
            <div id="box_p_3_2"></div>
            <div id="box_p_3_3" onClick={() => USERCHANCE('cross_5')}>
              <div id="cross_5" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_5" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
            <div id="box_p_3_4"></div>
            <div id="box_p_3_5" onClick={() => USERCHANCE('cross_6')}>
              <div id="cross_6" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_6" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
          </div>
          <div id="box_p_4"></div>
          <div id="box_p_5">
            <div id="box_p_5_1" onClick={() => USERCHANCE('cross_7')}>
              <div id="cross_7" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_7" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
            <div id="box_p_5_2"></div>
            <div id="box_p_5_3" onClick={() => USERCHANCE('cross_8')}>
              <div id="cross_8" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_8" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
            <div id="box_p_5_4"></div>
            <div id="box_p_5_5" onClick={() => USERCHANCE('cross_9')}>
              <div id="cross_9" className="cross" style={{ display: 'none' }}>
                X
              </div>
              <div id="circle_9" className="circle" style={{ display: 'none' }}>
                O
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="B_part_2">
        <button onClick={RESTART} id="restart" style={{ display: 'flex' }}>
          RESTART
        </button>
      </div>
    </div>
  );
}

export default Body;
