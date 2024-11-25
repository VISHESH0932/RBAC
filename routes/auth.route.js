const router = require('express').Router()

router.get('/login',async(req,res,next)=>{
    res.render('login');
});

router.post('/login',async(req,res,next)=>{
    res.send('Login post');
});

router.get('/register',async(req,res,next)=>{
    res.render('register');
});

router.post('/register',async(req,res,next)=>{
    res.send('register post');
});

router.get('/logout', async(req,res,next)=>{
    res.send('Logout');
});


module.exports = router;
