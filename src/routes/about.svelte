<div class="container">
    <div class="wrapper">
        <div class="rubber"></div>
        <div class="stick left-stick"></div>
        <div class="stick right-stick"></div>
        <div class="square"></div>
    </div>
</div>
<style>
    
    .container{
        width:100vw;
        height:100vh;
        display: grid;
        place-items: center;
        overflow: hidden;
        
    }
    .wrapper{
        width:90vw;
        height:80vh;
        background-color: #1f5050;
        border-radius: 0.5rem;
        position: relative;
    }
    .wrapper>div{
        position: absolute;
    }
    .rubber{
        width: 78vw;
        height: 50vh;
        left:6vw;
        bottom:24vh ;
        border-bottom: 1rem solid coral;
        box-shadow: 0 1rem 0 #ddd;
        animation: rubberAnim 2s infinite linear;
    } 
    @keyframes rubberAnim{
        0%,
        20%{
            border-radius: 0;
            transform: translateY(0);
        }
        50%,
        60%{
            border-radius: 0 0 50% 50%;
            transform: translateY(23vh);
        }
        62%,
        100%{
            border-radius: 0;
            transform: translateY(0);
        }
    }   
    .stick{
        width:2rem;
        height:40vh;
        background-color: coral;
        border-radius: 1rem 1rem 0 0;
        bottom: 0;
        transform-origin: bottom center;
    }
    .left-stick{
        left:5vw;
        box-shadow: 0.2rem 0 0.5rem #555;
        animation: leftStickAnim 2s infinite linear;
    }
    @keyframes leftStickAnim{
        0%,
        30%{
            transform: rotateZ(0);
        }
        50%,
        65%{
            transform: rotateZ(2deg);
        }
        80%,
        100%{
            transform: rotateZ(0);
        }
    }
    .right-stick{
        right:5vw;
        box-shadow: -0.2rem 0 0.5rem #555;
        animation: rightStickAnim 2s infinite linear;
    }
    @keyframes rightStickAnim{
        0%,
        30%{
            transform: rotateZ(0);
        }
        50%,
        65%{
            transform: rotateZ(-2deg);
        }
        80%,
        100%{
            transform: rotateZ(0);
        }
    }    
    .square{
        width: 10vw;
        aspect-ratio: 1;
        background-color: azure;
        border-radius: 2rem;
        left: 40vw;
        box-shadow: 0 0 0.2rem #555;
        animation: squareAnim 2s infinite linear;
    }
    @keyframes squareAnim{
        0%{
            transform: translateY(5vh);
        }
        20%{
            transform: translateY(37vh);
        }
        50%,
        60%{
            transform: translateY(58vh);
        }
        62%{
            transform: translateY(45vh);
        }
        80%{
            transform: translateY(10vh)
            rotate(90deg);
        }
        100%{
            transform: translateY(5vh)
            rotate(90deg);
        }

    }

</style>