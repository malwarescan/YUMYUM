export default function Footer() {
  return (
    <footer className="bg-thai-cream py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-deep-purple font-milkyway text-lg mb-4">YUMYUM</h3>
            <p className="text-deep-purple text-sm">
              Your premium cannabis delivery marketplace
            </p>
          </div>
          <div>
            <h4 className="text-deep-purple font-milkyway text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-deep-purple hover:text-thai-gold transition-colors">Products</a></li>
              <li><a href="/login" className="text-deep-purple hover:text-thai-gold transition-colors">Login</a></li>
              <li><a href="/checkout" className="text-deep-purple hover:text-thai-gold transition-colors">Checkout</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-deep-purple font-milkyway text-lg mb-4">Contact</h4>
            <p className="text-deep-purple text-sm">
              support@yumyum.com<br />
              1-800-YUMYUM
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-deep-purple/20">
          <p className="text-deep-purple text-sm text-center">
            © {new Date().getFullYear()} YUMYUM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 