---
title: How to use XFCE4 Panel in BSPWM
description: Sometimes, you just need a simple panel, why not use XFCE4 one?
tags: linux bspwm xfce
---

# Installing XFCE4 Panel
  Before you doing this, you need to install xfce4 panel.

  In Arch Linux you can just run: `sudo pacman -S xfce4-panel`


## I've installed, what should I do now?
  ### Configuring your bspwmrc
  Now, you have to edit your **bspwmrc**

  
  And append above code into the file:
  ```bash
  pgrep -x xfce4-panel || xfce4-panel --disable-wm-check
  ```
# Fine. But I want fullscreen! 
  ## What should I do now?
  That's is simple to solve!

  You just need to append these lines to your **bspwmrc**!
  ```bash
  bspc rule -a xfce4-panel layer=below sticky=off \
               manage=on focus=off border=off \
               locked=on
  ```
