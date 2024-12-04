import Link from "next/link";
import { Instagram, Music2, Youtube } from "lucide-react";
import { AiOutlineApple, AiOutlineSpotify } from "react-icons/ai";

export default function ContactFooter() {
  return (
    <footer className="max-w-5xl mx-auto px-4 py-16">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-sm tracking-widest">KASTEO</p>
          <h2 className="text-6xl font-bold tracking-wider">CONTACT</h2>
        </div>

        <div className="h-px bg-gray-200" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium tracking-wide">
                MUSICIAN - ARTIST - PRODUCER
              </h3>
              <p className="text-gray-600">
                Innovative Music Producer Crafting Immersive Soundscapes and
                Redefining Modern Music.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm tracking-wide">Listen on</h4>
              <div className="flex gap-6">
                <Link
                  target="_blank"
                  href={
                    "https://open.spotify.com/artist/3K2JBrrtua09FRKEROwdbu?si=zlmro6kXR5mNfmUCJwtkgg&nd=1&dlsi=a809a6d0cf4d48c2"
                  }
                  className="hover:text-gray-600"
                >
                  <AiOutlineSpotify className="h-6 w-6" />
                  <span className="sr-only">Spotify</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://music.apple.com/us/artist/kasteo/1779402467"}
                  className="hover:text-gray-600"
                >
                  <AiOutlineApple className="h-6 w-6" />
                  <span className="sr-only">Apple</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.youtube.com/@kasteo332"}
                  className="hover:text-gray-600"
                >
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-sm tracking-wide">Booking</h4>
              <Link
                href="mailto:booking@sonicdrive.music"
                className="text-gray-600 hover:text-gray-900"
              >
                booking@sonicdrive.music
              </Link>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm tracking-wide">Find me on</h4>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-gray-600">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-gray-600">
                  <Music2 className="h-6 w-6" />
                  <span className="sr-only">Threads</span>
                </Link>
                <Link href="#" className="hover:text-gray-600">
                  <Music2 className="h-6 w-6" />
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link href="#" className="hover:text-gray-600">
                  <Music2 className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
