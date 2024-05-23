/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be? (DONE)

2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. (DONE)
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1

3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)) (DONE)

4. For good measure, getTotalSupply() should return the number of NFT's you have created (DONE)
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const noOfNft = [];

function mintNFT (name,color,speed,horespower,price) {
    const metaData = {
        "Name":name,
        "Color":color,
        "Speed":speed,
        "HorsePower":horespower,
        "Price":price
    }
    noOfNft.push(metaData)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0 ; i<noOfNft.length ; i++)
        {
            
            console.log("CAR NAME:"+noOfNft[i].Name);
            console.log("CAR COLOR:"+ noOfNft[i].Color);
            console.log("CAR SPEED:"+ noOfNft[i].Speed);
            console.log("HORSE POWER:" + noOfNft[i].HorsePower);
            console.log("PRICE:"+ noOfNft[i].Price);
            console.log("--------------------")
            
        }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFT's Created:"+ noOfNft.length)
}

// call your functions below this line
mintNFT("Buggati Chiron","Red","300 km/hr",1578,"$4,899,000");
mintNFT("Ferrari LaFerrari ","Green","210 km/hr",950,"$3,055,417");
mintNFT("Supra mk5 ","Red","250 km/hr",382,"$46,440 ");
listNFTs();
getTotalSupply();
