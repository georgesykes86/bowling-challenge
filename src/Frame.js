function Frame(){
  this.isComplete = false;
  this.rollScores = []
}

Frame.prototype.addScore = function(score){
  if (this.isComplete) { return }
  if (this.rollScores.length === 0 && score === 10 ) { this.isStrike = true; }
  this.rollScores.push(score);
  this._checkComplete();
}

Frame.prototype._isSpare = function(){
  (this.rollScores[0] + this.rollScores[1]) === 10;
}

Frame.prototype._checkComplete = function(){
  if (this._hasAllRolls()){
    this.isComplete = true;
    this._calculateFinalScore();
  }
}

Frame.prototype._calculateFinalScore = function(){
  this.Score = this.rollScores.reduce(function(acc, val) { return acc + val; });
}

Frame.prototype._hasAllRolls = function(){
  if (((!!this.isStrike || this._isSpare()) && this.rollScores.length < 3) || (this.rollScores.length < 2)){
    return false;
  } else {
    return true;
  }
}
