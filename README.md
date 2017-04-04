# JAZZUP
A wrapped for your commands, to save you from the boring long waiting times

## How To Use
Install the module globally

``` npm install -g jazzup ```

Now all you have to do is add in front of your command "jazzup" and your boring command will now be all jazzed up with visual and audio embelishments.

``` jazzup npm install ```

There will be music, thrilling and exciting. And ASCII characters looking at you.
Here's an example of how your console output might look like

```
$ jazzup npm install

*********** THE WILD WILD OPS **************


            ___
         __|___|__
          ('o_o')
          _\~-~/_    ______.
         //\__/\ \ ~(_]---'
        / )O  O( .\/_)
        \ \    / \_/
        )/_|  |_\
       // /(\/)\ \
       /_/      \_\
      (_||      ||_)
        \| |__| |/
         | |  | |
         | |  | |
         |_|  |_|
         /_\  /_\

You see, in this world there's two kinds of people, my friend: Those with loaded guns and those who dig.
You dig.

******************************************************************
The wild op begins...

When you have to shoot, shoot. Don't talk.
....
...
..
.

```

## Effects JSON Structure
You can add predefined effects (music and story) to any command you'd like.
Feel like Spiderman theme would match your "rm -rf"? Go for it and update the EffectsJSON in your fork.

The key is a RegExp that is supposed to match a command as in "^git push"
Will be case insensitive, just like my heart.

## Art
The ASCII art can be added to the art/ folder as a .txt file and referenced in the EffectsMap

## Contributing
Feel free to improve or add to the Effects JSON
Make a pull request and I'll gladly merge and republish

Email me: m at marius dot in
