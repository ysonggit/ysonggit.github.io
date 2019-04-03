---
layout: default
---
# Portfolio

* * *

## Education

From 2010 to 2015, I studied at the [University of South Carolina](https://sc.edu/) and obtained my Ph.D. degree in Computer Science. I accomplished [research projects](#research-experience) on robotics, multi-robot systems, localization, motion planning, and computational geometry by working with my Ph.D. advisor, [Dr. Jason M O'Kane](https://cse.sc.edu/~jokane/).

Below is a picture of me with Dr. O'Kane. Many of those who work on the robotics projects are familiar with Dr. O'Kane because one of his books, ["A Gentle Introduction to ROS"](https://www.goodreads.com/book/show/26017473-a-gentle-introduction-to-ros), is popular among the ROS users. I quickly mastered how to use ROS for my research projects by reading this book and strongly recommend this book to the ROS beginners :D.

<img src="./assets/img/withadvisor_clip.jpg" width="360">

## Autonomous Driving Startup Experience

One of the coolest works I have done in my life is working with seven engineers to build a self-driving shuttle in a [Y Combinator](https://www.ycombinator.com/)-backed **startup** company, called [Auro.ai](http://auro.ai/), in 2015. The three months of that summer became my proudest memory. I, together with the engineers and the founders, spent days and nights working on an electric golf car in a garage of Sunnyvale, California. Finally, we successfully made it drive itself autonomously!

The picture of three engineers (me on the very left) and three co-founders (in white T-shirts) below was taken in an evening after we tested the autonomous driving shuttle on the [Santa Clara University](https://www.scu.edu/news-and-events/press-releases/2015/august-2015/driverless-shuttle-experiment-hits-the-ground-at-scu.html) campus ([Youtube video](https://youtu.be/5wIv-CZRwSU)).

<img src="./assets/img/auro_team.jpg" width="450">

The picture of me below was taken in front of the Computer History Museum, Mountain View, California. We demonstrated our self-driving shuttle in the YC Demo Day Summer 2015. The [Auro](http://auro.ai) was highlighted in the news on the [Tech Crunch](https://techcrunch.com/2015/08/18/hardware-demo-day/) and [Venture Beat](https://venturebeat.com/2015/08/19/11-startups-you-should-know-from-y-combinators-summer-2015-demo-day/), etc.

<img src="./assets/img/auro_me.jpg" width="450">

### Motion Planning Work

My engineering achievements include implementing and testing the performance of the local planner for the vehicle using **ROS**.

I implemented a RRT\* path planner based on ROS and [OMPL](http://ompl.kavrakilab.org/) and tested it with the real LIDAR dataset collected on Poplar Ave, Sunnyvale. Here is one of the simulations:

<iframe src="https://player.vimeo.com/video/135706487" width="450" height="280" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Also, [Srinivas](https://www.crunchbase.com/person/srinivas-reddy-2), [Jit Ray Chowdhury](https://www.linkedin.com/in/jitrc/) and I worked out a local path planner by following and interpolating GPS waypoints.

<iframe src="https://player.vimeo.com/video/136694294" width="450" height="260" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Udacity Self-Driving Car Engineer Nanodegree

My research and technical strength are in the motion planning area. However, I never want to stop expanding my skills of the autonomous driving. By completing the [Deep Learning Specialization on Coursera](https://www.coursera.org/account/accomplishments/specialization/certificate/B72MXW7QHYAP), I understand the deep neural networks in theory. Moreover, I refresh my knowledge and hands-on development experience of the autonomous driving car by accomplishing the [Udacity Self-Driving Car Engineer Nanodegree](https://graduation.udacity.com/confirm/KRNP7Q2R) from August 2018 to March 2019.

The projects cover the topics of perception, deep learning, localization, motion planning, and control systems.

### Perception

#### Lane Lines Detection ([Github](https://github.com/ysonggit/CarND-LaneLines-P1))

<iframe width="450" height="260" src="https://player.vimeo.com/video/312253583" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>

#### Advanced Lane Lines Detection ([Github](https://github.com/ysonggit/CarND-Advanced-Lane-Lines))
Construct a complete perception pipeline using Python and **OpenCV** to detect lanes from video, including the camera calibration, image distortion correction, color transform, perspective transform, lane boundary detection, curve fitting, and curvature estimation.
<iframe src="https://player.vimeo.com/video/312251605" width="450" height="260" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Convolutional Neural Networks

#### Traffic Sign Classifier ([Github](https://github.com/ysonggit/CarND-Traffic-Sign-Classifier-Project))

Train and validate a model to classify traffic sign images from the [German Traffic Sign Dataset](http://benchmark.ini.rub.de/?section=gtsrb&subsection=dataset) using [LeNet](http://yann.lecun.com/exdb/publis/pdf/sermanet-ijcnn-11.pdf) on **Tensorflow**. Predict the signs given new images and analyze their Softmax probabilities with the trained model.

#### Behavior Cloning ([Github](https://github.com/ysonggit/CarND-Behavioral-Cloning-P3))

Implement LeNet and [Nvidia's CNN architectures](https://devblogs.nvidia.com/deep-learning-self-driving-cars/) on **Keras**. Train, test and validate an autonomous vehicle model and successfully drives the car around with this model in the simulation environment.

<iframe width="450" height="250" src="https://player.vimeo.com/video/312311053" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>

### Localization

#### Extended Kalman Filter ([Github](https://github.com/ysonggit/CarND-Extended-Kalman-Filter-Project))
<iframe src="https://player.vimeo.com/video/308878689"  width="450" height= "200" frameborder="0" ></iframe>

#### Particle Filter ([Github](https://github.com/ysonggit/CarND-Kidnapped-Vehicle-Project))
<iframe src="https://player.vimeo.com/video/308774614" width="450" height= "200" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Motion Planning

#### Highway Path Planning using A\* ([Github](https://github.com/ysonggit/CarND-Path-Planning-Project))
Build a path planner that generates a safe trajectory to navigate a vehicle through traffic on a highway based on the A\* search algorithm using C++. I publish a short story to describe my design of this local planner at [Medium](https://medium.com/@ysong.sc/a-highway-path-planner-using-a-search-ac26a9caeb63).
<iframe src="https://player.vimeo.com/video/311557329" width="450" height= "240" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>

### Control Systems

#### PID Controller ([Github](https://github.com/ysonggit/CarND-PID-Control-Project))
<iframe width="450" height="240" src="https://player.vimeo.com/video/312467932" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>

## Research Experience

I worked with Dr. O'Kane published two papers at **IROS 2016** and **ICRA 2014** about two novel decentralized algorithms for a large number of robots to form various repeated lattice patterns, including squares, hexagons, octagon-squares, etc. Robots can autonomously organize themselves to form desired patterns by performing task assignments.

The simulations of two algorithms are implemented with ROS.

Y. Song and J. M. O'Kane, "Forming repeating patterns of mobile robots: A provably correct decentralized algorithm," IROS, Daejeon, 2016. [URL](https://ieeexplore.ieee.org/abstract/document/7759844)
<iframe width="450" height="400" src="https://player.vimeo.com/video/130678443" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>

Y. Song and J. M. O'Kane, "Decentralized formation of arbitrary multi-robot lattices," ICRA, Hong Kong, 2014.[URL](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6906994&isnumber=6906581)
<iframe width="450" height="450" src="https://player.vimeo.com/video/120422876" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>

I also presented a computation-geometry based method to approximate a robot's information space at **ICRA in 2012**.

Y. Song and J. M. O'Kane, "Comparison of constrained geometric approximation strategies for planar information states," Saint Paul, MN, 2012. [URL](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6225286&isnumber=6224548)
<iframe width="450" height="250" src="https://player.vimeo.com/video/120422874" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>

Turn back the clock to 10 years ago, 2009, I accomplished my first autonomous mobile robot project in the real world, by working with [Dr. Damjan Miklic](https://www.linkedin.com/in/damjan-miklic-42a2b93/). The work was to dynamically maintaining and updating a safe, collision-free formation of multiple autonomous vehicles using a leader-follower control strategy.

D. Miklic, S. Bogdan, R. Fierro, Y. Song, "A grid-based approach to formation reconfiguration for a class of robots with non-holonomic constraints," European journal of control, 2012. [URL](https://www.sciencedirect.com/science/article/pii/S0947358012705423)
<iframe width="450" height="400" src="https://player.vimeo.com/video/120422875" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>
