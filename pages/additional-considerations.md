# Additional considerations

## Device and operating system fragmentation

Mobile ecosystems are inheritly fragmented. It's a twofold problem. There's a new major release every year and 
then there are a huge amount of different devices out there.

The OS fragmentation is especially bad on [Android](https://developer.android.com/about/dashboards).
Though it is not much of an issue on [iOS](https://developer.apple.com/support/app-store/).
The new major release every year need to be considered because it could potentially break your app.

Different devices with a lot of different configuration, hardware and software wise, cause wide variety of 
problems. This is also the reason [monitoring is listed as an expected feature](/expected-features).

Because of these problems you should have a strategy in place for deciding when to drop support for old 
devices and operating systems. Dropping support can reduce engineering effort and thus reduce costs.
While the business requirements say that you should reach as much devices as possible the tradeoff 
isn't always worth it.

## Apps need continuous maintenance

A software is often compared to a brick and mortar house. This comparison doesn't really hold.
The book [The Pragmatic Programmer](https://en.m.wikipedia.org/wiki/The_Pragmatic_Programmer) introduces 
the comparison that software is like a garden. This is especially true for the app ecosystem.
The store constantly change and evolve their rules and guidelines. This happens also for the
operating systems. 

If you're not planning to do continuous maintenance and change your app according to the stores
guidelines, you're in for a some bad surprises because it could very well be that you need to 
some bigger work just to get it compliant again.
