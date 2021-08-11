let score = [0,1,2,3,4,5,6];
var turn;
var team1 = {
    name:"Chennai Super Kings",
    runs:[],
    score:0
}
var team2 = {
    name:"Mumbai Indians",
    runs:[],
    score:0
}
window.onload = () => {
    selectTurn();
    updateBtnTxt();
    updateScore();
    updateNames();
}
let selectTurn = () =>{
    turn = Math.round(Math.random())+1;
    console.log(turn);
}
let updateBtnTxt = () =>{
    var btn = document.getElementById('strikebtn');
    btn.textContent = `${turn==1 ? team1.name+" (Batting)" : team2.name+" (Batting)"}`;
    var res = document.getElementById('res');
    res.style.visibility = "";
    if(team1.runs.length==6&&team2.runs.length==6){
        btn.remove();
        res.textContent = team1.score===team2.score?`Match Draw`:`${team1.score>team2.score? team1.name:team2.name} Wins`;
    }else{
        turn = team1.runs.length===6?2:team2.runs.length===6?1:turn;
    }
}
let updateScore = () =>{
    document.getElementById('t1score').textContent = team1.score;
    document.getElementById('t2score').textContent = team2.score;
}
let updateNames = () =>{
    document.getElementById('team1').textContent = team1.name;
    document.getElementById('team2').textContent = team2.name;
}
let btnclick = ()=>{
    var runs = score[Math.floor(Math.random()*score.length)];
    runs = runs===5?"W":runs;
    if(turn===1){
        team1.runs.push(runs);
        team1.score = calcScore(team1.runs);
    }else{
        team2.runs.push(runs);
        team2.score = calcScore(team2.runs);
    }
    updateBtnTxt();
    updateScore();
    updateRuns();
}
let calcScore = (runs)=>{
    return runs.map(num => {
        return num=='W'?0:num;
    }).reduce((total,num)=> total+num);
}
let updateRuns = ()=>{
    var teamOne = document.getElementById('runst1').children;
    var teamTwo = document.getElementById('runst2').children;
    team1.runs.forEach((runs,index) => {
        teamOne[index].textContent = runs;
    });
    team2.runs.forEach((runs,index) => {
        teamTwo[index].textContent = runs;
    });
}