<script>

document.write("VRF Number to PAd Conversion fucntion<br><br>");

//Core Functions:
//Call either pad_of_numbers or pad_of_lowercase to return pads in an array
// number of pads and pad length can be set in UI
// Random number function needs to be replaced with VRF function at some stage

//JS random 256bit number - to be replaced by VRF function
function rnd256() {
  const bytes = new Uint8Array(32);
  
  // load cryptographically random bytes into array
  window.crypto.getRandomValues(bytes);
  
  // convert byte array to hexademical representation
  const bytesHex = bytes.reduce((o, v) => o + ('00' + v.toString(16)).slice(-2), '');
  
  // convert hexademical value to a decimal string
  return BigInt('0x' + bytesHex).toString(10);
}


//These are variables which can be user defined on the UI
var test_pad_length = 10;
var test_number_of_pads = 5;

//prints out the set or arrays for testing - to be fixed in UI
document.write("<br><br>" + pad_of_numbers(test_pad_length, test_number_of_pads))
document.write("<br><br>" + pad_of_lowercase(test_pad_length, test_number_of_pads))


//Converts 256 bit number to a pad array
function convert_num_to_pad(pad_length, vrf_number, number_of_pads, character_value) {
  var pad_array = []
  for (i=0; i<number_of_pads; i++) {
      var str_a = vrf_number.toString();
    pad_array.push(str_a.slice(i*pad_length*character_value, i*pad_length*character_value + pad_length*character_value));
    }
    return(pad_array)
}

//Creates a pad list based on specifications
function pad_generate(pad_length, number_of_pads, character_value) {
  var vrf_array = []
  var numbers_required = pad_length * number_of_pads * character_value;
    var total_length = 0;
    while(total_length <= numbers_required){
      var temp_vrf = rnd256()
        total_length += temp_vrf.length
        vrf_array.push(temp_vrf)
    }
  var long_vrf_num = vrf_array.join('');
  return(convert_num_to_pad(pad_length, long_vrf_num, number_of_pads, character_value))
}

//Creates a pad array of Numbers
function pad_of_numbers(pad_length, number_of_pads){
  return(pad_generate(pad_length, number_of_pads, 1))
}

//Creates pad array of lowercase characters
function pad_of_lowercase(pad_length, number_of_pads){
  pad_of_letters = []
  pads_array = pad_generate(pad_length, number_of_pads, 2);
    //document.write("<br><br> array=" + pads_array)
    //var arrayLength = pads_array.length;
  for (var i = 0; i < number_of_pads; i++) {
      pad_of_letters.push(pad_convert_lowercase(pads_array[i]))
    }
    return(pad_of_letters)
}


//makes number pads into lowercase text pads
function pad_convert_lowercase(pad_numbers) {
  char_pad = ""
  for (i=0; i<pad_numbers.length; i+=2){
      num = pad_numbers.slice(i, i+2)
        //document.write("<br><br> number=" + num)
        num = num%26
        //document.write("<br><br>modulo=" + num)
        char_pad+=String.fromCharCode(97 + num)
    }
    //document.write("<br><br>char_pad=" + char_pad)
    return(char_pad)
}

</script>
