router.get('login',(req,res) => {
    //passport 
    res.send('login'); 
  })
  
  router.get('logout',(req,res) => {
    //passport 
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
  
  //Google 
  app.get('/auth/google',
    passport.authenticate('google', { 
      scope: ['profile'] }));
  
  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });