export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookies Policy</h1>
        <div className="prose prose-lg">
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us make your experience better.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">We use cookies to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve our services</li>
              <li>Provide personalized content and advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Essential cookies: Required for the website to function</li>
              <li>Analytical cookies: Help us understand how visitors use our site</li>
              <li>Functional cookies: Remember your preferences</li>
              <li>Marketing cookies: Track your activity across websites</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Most web browsers allow you to control cookies through their settings. You can delete existing cookies and set your browser to prevent new cookies from being set.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}