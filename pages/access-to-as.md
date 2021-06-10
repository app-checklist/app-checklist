# Giving and getting access to the stores

Giving other developers (or getting) access to App Store Connect or Google Play Developer Console 
is an important part of the app development lifecycle.
It should be done as soon as possible because of [the release process](/release).

Not having access to the target account makes the development more error prone and harder for all involved parties.
- bundle/app ids
- push notifications
- 3rd party SDKs which need signing certificates
- double configurations
- dev and prod environment diverge -> loss of quality
- bugs can't be reliably reproduced
- release process can't be tested, see [the release process](/release) on why that's bad.
