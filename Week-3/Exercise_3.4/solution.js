const superHero = {
    firstName: 'Tony',
    lastName: 'Stark',
  }
  
  const superHero2 = {
    firstName: 'Bruce',
    lastName: 'Wayne',
  }
  
  function getHeroName(){
    return 'My hero is ' + this.firstName + ' ' + this.lastName;
  }
  
  function getHeroDetails(superName, place){
    return 'My hero is ' + this.firstName + ' ' + this.lastName+ 
      ' alias ' + superName + ' from ' + place;
  }
  
  // Use call() to assign 'this' in the function 
  // to object superHero2
  var myHero = getHeroName.call(superHero2);
  console.log(myHero);
  
  // Use apply() to assign 'this' in the function
  // to object superHero2 and also pass an array of  parameters
  
  var details = ['Batman', 'Gotham'];
  var myHeroDetails = getHeroDetails.apply(superHero2, details);
  console.log(myHeroDetails);
  

  //Instead of using call(), apply() we use bind() to bind 
  // 'this' to the function and call the function in normal way.
  
  var mySuperHero = getHeroName.bind(superHero);
  
  console.log(mySuperHero()); // Here we don't use call() or apply()