4
Jump to Comments

3
Save

Philip Pavo
Philip Pavo
Posted on Mar 26, 2023


3

1
Animate Burger Menu with React-Spring
#
javascript
#
tutorial
#
react
#
webdev
Image description

Introduction
This post will describe just another way to create a burger menu animation that looks super natural and physically accurate.

There are many ways to make burger animations using different tools. For example, you can create an animation using basic HTML and CSS or by using JavaScript libraries like Velocity.js. If you're working with React, you can use Framer Motion or React-Spring.

In this post, we will use React-spring, which enables the creation of animations based on real physics principles. Let's dive right in!

Step-by-Step Guide
Burger menu animation is a type of "micro animation”. While almost invisible, these animations are important because they can enhance the user experience by adding visually pleasing effects to user interfaces.

A few words about React Spring. It’s a simple but very powerful tool. In short, it interpolates a value from a to b. But it's important to note that this interpolation is not a simple linear calculation. It's based on real-world physics principles.

Linear Animation	Spring Animation
Image description	Image description
Prepare Icon Component
To begin, we need to prepare our icon, which will consist of three rounded rectangles that will be transformed into two crossed lines when the burger menu opens.

To animate an SVG icon, it should be transformed into a JSX component. Here is an example of a simple burger menu icon component:

To begin, we need to prepare our icon, which will consist of three rounded rectangles that will be transformed into two crossed lines when the burger menu opens.
To animate an SVG icon, it should be transformed into a JSX component. Here is an example of a simple burger menu icon component:

    const BurgerMenuIcon = () => {
        return (
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                y={"0"}
                width="24"
                height="2"
                rx="1"
                fill={"#000025"}
              />
              <rect
                y="9"
                width="24"
                height="2"
                rx="1"
                fill={"#000025"}
              />
              <rect
                y="18"
                width="24"
                height="2"
                rx="1"
                fill={"#000025"}
              />
            </svg>
        )
    }
Decompose Animation
This is the most important part of any animation. We should know how each element of the animation will move. To make the animation look better, the elements should move in a way that looks natural and lifelike. For example, we can break down our icon into the following stages:

Image description

Let's move it!
To animate an HTML element using React-spring, it should be wrapped in the animated component from the react-spring library.

As we will be animating our rect elements, let's rewrite them as animated.rect. Then we can provide prop style to it.

Let’s try to rotate first rect of burger icon:

// Here, we will configure our animation using the useSpring hook. This hook returns a special object that generates a sequence of transitioned values.
const style = useSpring({
        to: {
            transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
            config: config.wobbly,
        }
});

...
// apply a style to our element that is wrapped in the animated component
<animated.rect
  style={style}
  y={"0"}
  width="24"
  height="2"
  rx="1"
  fill={"#000025"}
/>

...
But we have two problems with the SVG element. First, if the rect element extends beyond the parent boundaries, it gets clipped. This can be resolved by setting the overflow: visible property for our SVG element. Second, the element rotates around a point other than its center. To address this, we need to establish a rule for the rect element on how to apply transform properties to it.

Image description

We can fix these issues by adding a few lines of CSS to our SVG element:

.burgerIcon{
    overflow: visible;
}

.burgerIcon>rect{
    transform-origin: center;
    transform-box: fill-box;
}
Bringing it all together
Now that we have defined each step of the animation and know how to apply it to an element, we can animate the top, medium, and bottom parts of the burger menu using the following algorithm:

Stage 1
Move the top and bottom rectangles to the center.
At the same time, change the opacity of the medium rectangle to zero.
Stage 2
Rotate top rectangle to -45 degrees and the bottom to -135 degrees.
Note that we don't need to use spring animation in Stage 1 because it's just an intermediate stage of a complex animation. To change it to linear, set the duration in the config as follows:

const style = useSpring({
    to: {
            transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
      config: {
                duration: 100 // in milliseconds
            },
        }
});
Here is the resulting code of the component:

See code

    import { animated, config, useSprings } from "react-spring";
    import { memo } from "react";

    const linearConfig = {
      duration: 100
    };

    const topRect = async (next, isOpen) => {
      // Stage 1
      await next({
        transform: isOpen
          ? "translate(0px, 9px) rotate(0deg)"
          : "translate(0px, 9px) rotate(0deg)",
        config: linearConfig
      });

      // Stage 2
      await next({
        transform: isOpen
          ? "translate(0px, 9px) rotate(-45deg)"
          : "translate(0px, 0px) rotate(0deg)",
        config: config.wobbly
      });
    };

    const mediumRect = async (next, isOpen) => {
      // Medium rect has only Stage 1
      await next({
        to: {
          opacity: isOpen ? 0 : 1
        },
        // Make delay when isOpen changed from true to false
        delay: !isOpen && 100,
        config: linearConfig
      });
    };

    const bottomRect = async (next, isOpen) => {
      // Stage 1
      await next({
        transform: isOpen
          ? "translate(0px, -9px) rotate(0deg)"
          : "translate(0px, -9px) rotate(0deg)",
        config: linearConfig
      });

      // Stage 2
      await next({
        transform: isOpen
          ? "translate(0px, -9px) rotate(-135deg)"
          : "translate(0px, 0px) rotate(0deg)",
        config: config.wobbly
      });
    };

    const rects = [topRect, mediumRect, bottomRect];

    const BurgerMenu = memo(({ isOpen, onClick }) => {
      const [springs] = useSprings(
        3,
        (index) => ({
          to: async (next) => {
            await rects[index](next, isOpen);
          }
        }),
        [isOpen]
      );

      return (
        <svg
          onClick={onClick}
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="burgerIcon"
        >
          {springs.map((props, index, args) => {
            return (
              <animated.rect
                key={index}
                y={index * 9}
                width="24"
                height="2"
                rx="1"
                fill={"#4F4F4F"}
                style={props}
              />
            );
          })}
        </svg>
      );
    });

    export default BurgerMenu;
Sandbox
You can experiment with different options in the config to see how they affect the animation. Click on the burger icon to run the animation.



In this sandbox, you can choose a configuration from presets. However, you can also define your own configuration by using the parameters of mass, friction, and tension. For more information on Spring configurations, refer to this page.

Conclusion
With React Spring, you can create eye-catching animations and configure them with real physical parameters like mass, friction, and tension.

This is just one of thousands of ways to create a burger menu animation, and you can create your own using the basic principles from this example. When creating animations for web elements, it is important to think of them as real-life objects subject to real physics.

Thank you for reading this post! I would appreciate your feedback and comments.

👋 Before you go

Do your career a favor. Join DEV. (The website you're on right now)

It takes one minute, it's free, and is worth it for your career.

Get started

Top comments (4)
Subscribe
pic
Add to the discussion
 
 
ravavyr profile image
Ravavyr
•
Mar 30 '23

Wow...ok look, your button looks neat, sure.

But this has been done a thousand ways right, so at this point maybe we should be looking for the cleaner and more efficient ways of doing it so we're not cluttering our sites with unnecessary JS and HTML?

For example, here's a codepen with a buncha examples.
codepen.io/RRoberts/pen/ZBYaJr

This screenshot shows the entirety of the code used to render the first one, which essentially does what yours does, with a little less bounciness [easily adjusted with the CSS rules if you really need it to bounce so much]
gyazo.com/6ace6a8725772450157e27fd...

It's a fraction of the code to render a similar effect that in all honesty, your users aren't even gonna notice, so long as they can click on it easily and it opens and closes the menu correctly.

React Spring seems to make you write more code in order to achieve the same effect. Wasn't React made to simplify how we build websites? Why the added complexity?

Just my 2 cents


2
 likes
Like
Reply
 
 
pavophilip profile image
Philip Pavo 
•
Mar 31 '23

Thank you for your detailed feedback. This is my first post here, and I really appreciate it.

The main goal of my article was to present an alternative way to create web animations using JS. In some cases, it is more important to have greater control over the animation.

Although the CSS animations you provided in CodePen have a simple implementation with just a few lines of code, they are limited because they are only parameterized by duration and curve. While some of them may look smooth, they are not physically realistic like spring animations that are based on real physics parameters such as mass.

As you mentioned, React was developed to make website building easier while also providing tools for creating user-friendly UI. The key is to find a trade-off between performance, development speed and attractive design.


1
 like
Like
Reply
 
 
ravavyr profile image
Ravavyr
•
Apr 1 '23

I agree with all of that.
But in building websites for over a decade, i can tell you with utmost certainty that the bounciness of the menu icon is literally the last thing anyone should be caring about when it comes to "performance, development speed, and attractive design".

But your design looks nice and can now be copied and pasted by a myriad of devs looking to do something like that quickly.

I'm just not a fan of the amount of code it takes to accomplish something "close enough", because the users never care, ever.

I'm not gonna argue it any further because this would turn into [and i dunno if you've ever had one of these] arguments about what font to use on a website where you make about 20 font changes and spend a 100 hours on it and when it goes live, the main CTA button doesn't work and no one cares about the font at all, lol.


1
 like
Like
Reply
 
 
erik_ondra_55477ff59ca7aa profile image
Erik Ondra
•
Sep 12 • Edited on Sep 12

This is basically all the code you need:

      <span></span>
      <span></span>
      <span></span>
.hamburger .line{
width: 50px;
height: 5px;
background-color: blue;
display: block;
margin: 8px auto;
-webkit-transition: all 0.3s ease-in-out;
-o-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;
}

.hamburger:hover{
cursor: pointer;
}

hamburger-1.is-active .line:nth-child(2){
opacity: 0;
}

hamburger-1.is-active .line:nth-child(1){
-webkit-transform: translateY(13px) rotate(45deg);
-ms-transform: translateY(13px) rotate(45deg);
-o-transform: translateY(13px) rotate(45deg);
transform: translateY(13px) rotate(45deg);
}

hamburger-1.is-active .line:nth-child(3){
-webkit-transform: translateY(-13px) rotate(-45deg);
-ms-transform: translateY(-13px) rotate(-45deg);
-o-transform: translateY(-13px) rotate(-45deg);
transform: translateY(-13px) rotate(-45deg);
}

and then toggle an is-active css class


1
 like
Like
Reply
Code of Conduct • Report abuse
profile
Pinata
Promoted

Image of Pinata

Uploads > Configurations
Add file uploads and retrieval in minutes so you can focus on your app — because you’ve got better things to code than infrastructure.

Learn more

Read next
dinesh-se profile image
Managing Multiple Dialogs in Angular Material
Dinesh Haribabu - Oct 16

elanatframework profile image
CodeBehind 3.7 Released
elanatframework - Oct 16

sunnyss profile image
Java Programming
sunny - Oct 17

mshsayket profile image
Laravel Breeze Change Redirect After Login/Register
Saddam Hossain - Oct 16


Philip Pavo
Follow
Work
Betby
Joined
Nov 5, 2022
Trending on DEV Community 
Igor Boky profile image
This is how I built an analytic tool for Digital Products
#javascript #mongodb #buildinpublic
Yan Levin profile image
Did You Have a Mentor, and Did It Help You?
#discuss #webdev #career
Kiran Naragund profile image
🔥12 Best AI Coding Assistant Tools for Devs🧑‍💻
#ai #programming #productivity #coding
profile
Heroku
Promoted

Heroku

This site is built on Heroku
Join the ranks of developers at Salesforce, Airbase, DEV, and more who deploy their mission critical applications on Heroku. Sign up today and launch your first app!

Get Started

    import { animated, config, useSprings } from "react-spring";
    import { memo } from "react";

    const linearConfig = {
      duration: 100
    };

    const topRect = async (next, isOpen) => {
      // Stage 1
      await next({
        transform: isOpen
          ? "translate(0px, 9px) rotate(0deg)"
          : "translate(0px, 9px) rotate(0deg)",
        config: linearConfig
      });

      // Stage 2
      await next({
        transform: isOpen
          ? "translate(0px, 9px) rotate(-45deg)"
          : "translate(0px, 0px) rotate(0deg)",
        config: config.wobbly
      });
    };

    const mediumRect = async (next, isOpen) => {
      // Medium rect has only Stage 1
      await next({
        to: {
          opacity: isOpen ? 0 : 1
        },
        // Make delay when isOpen changed from true to false
        delay: !isOpen && 100,
        config: linearConfig
      });
    };

    const bottomRect = async (next, isOpen) => {
      // Stage 1
      await next({
        transform: isOpen
          ? "translate(0px, -9px) rotate(0deg)"
          : "translate(0px, -9px) rotate(0deg)",
        config: linearConfig
      });

      // Stage 2
      await next({
        transform: isOpen
          ? "translate(0px, -9px) rotate(-135deg)"
          : "translate(0px, 0px) rotate(0deg)",
        config: config.wobbly
      });
    };

    const rects = [topRect, mediumRect, bottomRect];

    const BurgerMenu = memo(({ isOpen, onClick }) => {
      const [springs] = useSprings(
        3,
        (index) => ({
          to: async (next) => {
            await rects[index](next, isOpen);
          }
        }),
        [isOpen]
      );

      return (
        <svg
          onClick={onClick}
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="burgerIcon"
        >
          {springs.map((props, index, args) => {
            return (
              <animated.rect
                key={index}
                y={index * 9}
                width="24"
                height="2"
                rx="1"
                fill={"#4F4F4F"}
                style={props}
              />
            );
          })}
        </svg>
      );
    });

    export default BurgerMenu;