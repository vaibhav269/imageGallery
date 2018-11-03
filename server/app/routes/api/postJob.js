var bodyParser = require('body-parser');
const Job = require('../../models/job');
const UserSession = require('../../models/userSession');
const User = require('../../models/user');

module.exports = function(app){
    app.post('/api/account/postJob',function(req,res,next){
        const { token } = req.body;
        const { jobHeading } = req.body;
        const { jobDesc } = req.body;
        const { jobCategory } = req.body;
        const { jobAmount} = req.body;

        UserSession.find({
            _id:token,
            isDeleted:false
        },function(err,userSessions){
            if(err){
                console.log(err);
                return res.send({
                    success:false,
                    message:'Error: serve error'
                });
            }
            if(userSessions.length !=1){
                return res.send({
                    success:false,
                    message:'Error:Invalid'
                });
            }
            const userSession = userSessions[0];
            User.find({
                _id:userSession.userId,
                isDeleted:false
            },function(err,users){
                if(err){
                    return res.send({
                        success:false,
                        message:'Error:Serve error'
                    });
                }
                if(users.length!=1){
                    return res.send({
                        success:false,
                        message:'Error:Invalid'
                    });
                }
                
                let user = users[0];
                
                const newJob = new Job();
                newJob.userId = user._id;

                newJob.job.amount = jobAmount;
                newJob.job.heading = jobHeading;
                newJob.job.desc = jobDesc;
                newJob.category = jobCategory;

                newJob.save((err,user)=>{
                    if(err){
                        return res.send({
                            success:false,
                            message:'Error:Serve error'
                        });
                    }
                    return res.send({
                        success:true,
                        message:'Posted Successfully'
                    });
                });                
            })
        });
    });
}