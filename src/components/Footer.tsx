import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-[#f5e8da] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Opening Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-serif font-semibold text-[#8b7355] mb-4">
              OPENING HOURS
            </h3>
            <div className="space-y-2 text-sm text-[#8b7355]">
              <div>Monday - Saturday:</div>
              <div>10:00AM - 7:00PM</div>
              <div>Sunday:</div>
              <div>Closed</div>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-serif font-semibold text-[#8b7355] mb-4">
              OUR LOCATION
            </h3>
            <div className="space-y-2 text-sm text-[#8b7355]">
              <div>F-1-23 & F-1-25, Jalan BG 3B/1,</div>
              <div>Bangi Gateway 3B, 43650</div>
              <div>Bandar Baru Bangi, Selangor, Malaysia</div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-serif font-semibold text-[#8b7355] mb-4">
              FOLLOW US
            </h3>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <Link
                href="https://instagram.com/klinikdrtwins"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#8b7355] hover:text-[#6b5b47] transition-colors"
              >
                {/* Instagram SVG - Square with circle and dot */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com/klinikdrtwins"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#8b7355] hover:text-[#6b5b47] transition-colors"
              >
                {/* Facebook SVG - lowercase 'f' in square */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <text
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fontSize="12"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    f
                  </text>
                </svg>
              </Link>
              <Link
                href="https://wa.me/601156653180"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#8b7355] hover:text-[#6b5b47] transition-colors"
              >
                {/* WhatsApp SVG - Speech bubble with phone */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.003 5.456-4.438 9.891-9.893 9.891zm8.413-18.304A11.815 11.815 0 0 0 12.05 0C5.495 0 .057 5.437.05 12.092c0 2.137.56 4.223 1.623 6.067L.057 24l6.019-1.579a11.888 11.888 0 0 0 5.978 1.528h.005c6.554 0 11.892-5.437 11.899-12.092a11.82 11.82 0 0 0-3.473-8.762z" />
                </svg>
              </Link>
            </div>
            <Image
              src="/thewellnest-logo.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
