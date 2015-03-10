
    var lumber = localStorage.getItem('lumber') || 0;
    var Worker = localStorage.getItem('worker') || 0;

    var lumberCost = 10;

    var WorkerHarvest = 1;


    function myC() {
      lumber += 1;
    }

    function addWorker(){
        if(lumber>=10){
            lumber -= lumberCost;
            Worker +=1;
        } else {
            console.log('Not enough lumber');
        }
    }

    function updateValues(){
        lumber+=WorkerHarvest*Worker;
    }

    function saveData(){
        localStorage.setItem('camp', JSON.stringify({
            lumber: lumber,
            worker: Worker,
            name: "Mike's camp"
        }));

    }

    function  loadData(){
        var camp = JSON.parse(localStorage.getItem('camp'));
        if(camp == null){
            lumber=0;
            worker=0;
        }else{
            lumber=camp.lumber;
            Worker=camp.worker;
        }

        updateUI();

    }


    function updateUI(){
        document.getElementById("value").innerHTML = "Lumber : " + lumber;
        document.getElementById("workerCount").innerHTML = "Worker : " + Worker;
    }