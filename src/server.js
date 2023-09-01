//dependencies
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')

//define the express operation
const app=express();
const port=3000;

//defining the cors -cross origin by reciving the data in json format
app.use(cors());
app.use(bodyParser.json())

//establish the connection with the dB
const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'root',
database:'cma'    
});

//verifying whether db is connected or not
db.connect(err=>{
if(err){
    console.error('connection is not established with the dB',err);
}
else{
    console.log('Connected to db')
}
});

app.listen(port,()=>{console.log('server port estbalished on 3000')})

//to insert client into db
app.post('/addMeeting',(req,res)=>{
    const {name,topic,numberofpeople,startdate}=req.body;
    const clientQuery = 'SELECT id FROM client WHERE name = ?';
    db.query(clientQuery, name, (clientErr, clientResults) => {
        if (clientErr) {
          console.error('Error fetching client id', clientErr);
          return res.status(500).json({ error: 'An error occurred while fetching client id' });
        }
    
        if (clientResults.length === 0) {
          return res.status(404).json({ error: 'Client not found' });
        }
    
        const clientId = clientResults[0].id;
    const sql='insert into meeting (mid,topic,numberofpeople,startdate)values(?,?,?,?)';
    db.query(sql,[clientId,topic,numberofpeople,startdate],(err,result)=>{
        if(err){
            console.error('Error in adding the clientt',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'meeting added successfully'});
        }
    });
    });
});
    

    app.post('/addClient', (req, res) => {
        const { name, email, address, password } = req.body;
        const sql = 'INSERT INTO client (name, email, address, password) VALUES (?, ?, ?, ?)';
        db.query(sql, [name, email, address, password], (err, result) => {
            if (err) {
                console.error('Error in adding the client', err);
                res.status(500).json({ error: 'An error occurred' });
            } else {
                res.status(200).json({ message: 'Client added successfully' });
            }
        });
    });
    
        //to get all the clients
    app.get('/getclients',(req,res)=>{
        const sql='select * from client';
        db.query(sql,(err,result)=>{
            if(err){
            console.error('Error in fetching the client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json(result);
        }
        
        
        });
        });

         //to get all the meetings
    app.get('/getmeetings',(req,res)=>{
        const sql = 'SELECT meeting.*, client.name FROM meeting INNER JOIN client ON meeting.mid = client.id';
        
        //const sql='select * from meeting';
        db.query(sql,(err,result)=>{
            if(err){
            console.error('Error in fetching the meeting',err);
            console.log('Meetings fetched:', result);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json(result);
        }
        
        
        });
        });
        
        //to get a product on id
    app.get('/getclient/:id',(req,res)=>{
            const id=req.params.id;
            const sql='select * from client where id=?';
            db.query(sql,[id],(err,result)=>{
                if(err){
                console.error('Error in fetching the client',err);
                res.status(500).json({error:'An error occured'});
            }else{
                res.status(200).json(result);
            }
           
            });
            });
        