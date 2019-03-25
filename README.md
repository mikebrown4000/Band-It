# Band-It
Music can be hard, but making a band should be easy.
That's why we created a platform that makes it easier for bands to find musicians and for musicians to network with bands.

## User Stories
![alt text](https://i.imgur.com/mTvPSeK.jpg)
![alt text](https://i.imgur.com/vHu0fE6.jpg)

## Diagram
![alt text](https://i.imgur.com/BH1DCCF.png)

## Wireframes
### Login and Register
![alt text](https://i.imgur.com/s5C3xZF.png)

### Band Profile
![alt text](https://i.imgur.com/J5GwN6d.jpg)

### Band Index
![alt text](https://i.imgur.com/NdcPGTB.jpg)

### Artist Index
![alt text](https://i.imgur.com/GBiHRF3.jpg)

## Code Snippet

```artistRouter.post('/bands/:id', restrict, async (req, res) => {
  try {
  console.log(req.params.id);
  console.log(res.locals.user.id);
  const { id } = res.locals.user;
  const artist = await Artist.findByPk(id);
  artist.bandId = req.params.id;
  await artist.save();

  res.json({id:artist.bandId})
  }catch (e) {
        res.status(500).send(e.message)
    }
})
```
Deployed Site:
http://banditproject.surge.sh/

