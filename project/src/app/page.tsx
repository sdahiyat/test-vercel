import { Camera, Users, Sparkles, Upload } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary rounded-full">
              <Camera className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            PhotoBuddy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Share photos and let AI help you create amazing content. Join the community of photographers enhanced by artificial intelligence.
          </p>
          <div className="space-x-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <Upload className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Upload & Share</h3>
            <p className="text-gray-600">
              Upload your photos and share them with the PhotoBuddy community
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Enhancement</h3>
            <p className="text-gray-600">
              Get AI-powered feedback, editing suggestions, and auto-generated captions
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Connect</h3>
            <p className="text-gray-600">
              Follow photographers, get inspired, and build your creative network
            </p>
          </div>
        </div>

        <div className="text-center bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to enhance your photography?
          </h2>
          <p className="text-gray-600 mb-6">
            Join PhotoBuddy today and experience the future of photo sharing with AI assistance.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </main>
  )
}
