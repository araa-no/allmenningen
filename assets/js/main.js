import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faFacebookF, faXTwitter, faLinkedin, faMastodon } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faFacebook, faFacebookF, faXTwitter, faLinkedin, faMastodon)

// Replace any <i> tags with <svg> icons
dom.watch()
