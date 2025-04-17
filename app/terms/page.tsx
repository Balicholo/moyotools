export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background py-12 pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <div className="prose prose-lg">
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using MoyoTools, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              MoyoTools grants you a limited, non-exclusive, non-transferable license to access and use our services for your business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Maintain the confidentiality of your account</li>
              <li>Provide accurate and complete information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use the services only for lawful purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content, features, and functionality of MoyoTools are owned by us and protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}