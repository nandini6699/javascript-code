//oops in js
class student{
    constructor(roll,name,branch){
      this.roll=roll
      this.name=name
      this.branch=branch
    }
    study(){
        console.log("study js")
    }
    party(){
        console.log("Biriyani party")
    }
    intro(){
        console.log("Roll = " +this.roll)
        console.log("Name = " +this.name)
        console.log("Branch = "+this.branch)
    }

}
st=new student(1,"Nandini","CSE")
st.study()
st.party()
st.intro()

//inheritance in js
class Artist{
    art(){
        console.log("perform and respect art")
    }
    earn(){
        console.log("earn respect")
    }

}
class Painter extends Artist{
    paint(){
        console.log("paint")
    }
    earn(){
        console.log("earn respect and money")
    }
    
}
p=new Painter()
p.art()
p.paint()
p.earn()
