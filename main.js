function startClassification() {
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/h2TrwFmVl/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results) {
   if(error){
    console.error(error);
   }     
   else{
    console.log(results)
   }
}