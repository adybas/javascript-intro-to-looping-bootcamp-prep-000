function forLoop(array) {
  for (let i = 0; i < 25; i++)
  { if (i === 1) {
    return "I am 1 strange loop."; 
    }
 else
   {
    return "I am ${i} strange loops.";
    }
  }
 }
 
 function add_one_to_each(array)
	for(let i = 0; i < array.length; i++)
      array[i] = array[i] + 1
    end
	return array
end