
describe('Read file', function() {
    it('Read file from file', function() {
       cy.readFile('./1.mjs').then((data)=> {
           console.log(data)
       })
    });    
});