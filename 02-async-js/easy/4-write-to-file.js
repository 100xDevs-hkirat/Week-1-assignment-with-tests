// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function writeToFile(fileName,data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (error) => {
            if (error) {
                console.log(`Error in writing file - ${error}`);
                reject('Error');
                return;
            }
            resolve('success');
        });
        
    })
}

function writeContent() {

    
    var fileName = "message.txt";
    var data = "Hello world this instruction was written on line number 16 Anim cillum ex proident voluptate excepteur dolore anim sit cupidatat minim reprehenderit. Nisi voluptate magna exercitation veniam sunt cillum reprehenderit laborum amet minim occaecat ullamco nisi elit. Nostrud ullamco sit fugiat laborum consectetur reprehenderit in minim Dolore excepteur aliqua est labore in deserunt laborum laboris nulla. Do aute laboris qui occaecat culpa consequat esse esse deserunt sint qui veniam anim dolor. Eu sit laborum officia do magna ut culpa occaecat eu aliqua. Et adipisicing magna cupidatat qui ad adipisicing. Dolore eu commodo tempor cupidatat irure minim amet est consectetur labore est laborum cillum. Commodo nulla cillum minim do voluptate pariatur laboris reprehenderit ut. Adipisicing reprehenderit esse voluptate nostrud qui cillum ad labore in aute commodo.Mollit minim do non laboris officia nulla anim incididunt laboris proident nostrud aliquip laboris. Reprehenderit nisi nisi sunt Lorem magna incididunt occaectadipisicing. Incididunt ex duis fugiat nisi quis ex labore qui labore.Duis ea aliquip pariatur do. Voluptate nulla adipisicing laboris esse adipisicing dolore aliquip sunt nisi magna ipsum cupidatat. Commodo ullamco esse labore nostrud reprehenderit esse anim excepteur in aliquip ipsum. Magna labore sint laboris voluptate id nisi cillum. Cillum deserunt nivelit elit in consectetur ea proident voluptate ie magna. Mollit cupidatat do cillum reprehenderit aliquip velit ullamco nisi commodo excepteur.Cillum nulla labore occaecat ut. Deserunt quis aute duis sit cupidatat reprehenderit culpa aliqua nostrud exercitation laborum occaecat ullamco. Occaecat non ipsum sit quis exercitation ullamco laboris. Consectetur occaecat sunt esse ad duis sit aute. Laboris aute veniam consequat et et. Ad aute enim commodo occaecat aute anim mollit sint mollit commodo. Magna nisi anim occaecat incididunt in tempor dolor cillum.Do consectetur fugiat sint reprehenderit sit laborum ut. Minim ad proident ullamco eiusmod in ea aute. Duis irure labore minim cupidatat pariatur dolor ea in nostrud adipisicing eiusmod deserunt.Labore duis ea officia consectetur. Et aliquip nulla labore dolore ut sint ad ex. Reprehenderit occaecat id in do ex minim reprehenderit cupidatat id sit minim aute. Sunt cillum voluptate quis non cillum voluptate. In pariatur cillum ex nulla commodo exercitation irure cupidatat sit ex.Aute sit labore est Lorem fugiat dolor. Minim non voluptate ad veniam laboris consequat ex duis enim do. Est est sint est occaecat ipsum. Sit do cupidatat commodo et duis quis. Proident proident laboris laboris proident elit ex. Ut sint laborum labore proident minim aliquip dolore commodo mollit ad do et enim quis.Elit reprehenderit cillum tempor commodo aliqua deserunt est sunt consectetur dolore enim commodo Lorem. Exercitation mollit proident eu in reprehenderit sunt nisi et. Sunt sunt fugiat ut sit. Ipsum labore labore aliqua quis consectetur. Voluptate deserunt laboris ex et. Labore magna ut labore enim ipsum aliquip commodo eiusmod reprehenderit voluptate excepteur quis pariatur in. Velit excepteur Lorem culpa duis parialabore voluptate esse."
    writeToFile(fileName, data).then((data) => {
        console.log(data)
    }); // no need for await as we don't need to use its content
}

writeContent();