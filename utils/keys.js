router.get('/login',(req,res) => {
    res.send('login'); 
  })
  
  router.get('/logout',(req,res) => {
    res.send('logout'); 
  })
  
  //Github
  app.get('/auth/github',
    passport.authenticate('github'));
  
  app.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });
  
 
