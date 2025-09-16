import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Send, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIAssistant = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            content: "Hello! I'm your AI learning assistant. How can I help you with your queries today?"
        }
    ])
    const [inputMessage, setInputMessage] = useState('')

    const suggestionChips = [
        'Rooftop Cafe',
        'local flavor',
        'local flavor'
    ]

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!inputMessage.trim()) return

        // Add user message
        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: inputMessage
        }

        setMessages(prev => [...prev, userMessage])

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                type: 'ai',
                content: generateAIResponse(inputMessage)
            }
            setMessages(prev => [...prev, aiResponse])
        }, 1000)

        setInputMessage('')
    }

    const generateAIResponse = (query) => {
        const responses = {
            'neural': "Sure! Neural networks are computing systems inspired by the human brain. Think of them as a network of interconnected nodes (like brain neurons) that process information.",
            'rooftop': "I'd be happy to help you find rooftop cafes! Rooftop dining offers amazing city views and a unique atmosphere. Would you like recommendations for specific locations?",
            'restaurant': "I can help you find the perfect restaurant! What type of cuisine are you in the mood for? Italian, Asian, Mediterranean, or something else?",
            'local flavor': "Local flavor refers to authentic, regional cuisine that represents the unique tastes and traditions of a specific area. It's about experiencing food that's deeply rooted in local culture and ingredients.",
            'example': "A common example is image recognition: when your phone recognizes faces in photos, it's using neural networks. They're also behind voice assistants like Siri, recommendation systems on streaming platforms, and even self-driving cars."
        }

        const lowerQuery = query.toLowerCase()
        for (const [key, response] of Object.entries(responses)) {
            if (lowerQuery.includes(key)) {
                return response
            }
        }

        return "That's an interesting question! I'd be happy to help you explore that topic further. Could you provide a bit more context about what specifically you'd like to know?"
    }

    const handleChipClick = (chip) => {
        setInputMessage(chip)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-white border-b sticky top-0 z-10">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-3">
                            <Link to="/">
                                <Button variant="ghost" size="icon">
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                            </Link>
                            <h1 className="text-xl font-semibold text-gray-900">AI Assistant</h1>
                        </div>
                        <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 pb-32">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                {/* Avatar */}
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'ai' ? 'bg-teal-600' : 'bg-gray-600'
                                    }`}>
                                    {message.type === 'ai' ? (
                                        <Sparkles className="h-4 w-4 text-white" />
                                    ) : (
                                        <span className="text-white text-sm font-medium">U</span>
                                    )}
                                </div>

                                {/* Message Bubble */}
                                <Card className={`${message.type === 'user'
                                        ? 'bg-teal-600 text-white border-teal-600'
                                        : 'bg-white border-gray-200'
                                    } shadow-sm`}>
                                    <CardContent className="p-4">
                                        <p className={`text-sm leading-relaxed ${message.type === 'user' ? 'text-white' : 'text-gray-700'
                                            }`}>
                                            {message.content}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}

                    {/* Suggestion Chips */}
                    {messages.length === 1 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="text-sm text-gray-500 mb-2 w-full">Try asking about:</span>
                            {suggestionChips.map((chip, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="cursor-pointer hover:bg-teal-50 hover:border-teal-300 px-3 py-1"
                                    onClick={() => handleChipClick(chip)}
                                >
                                    {chip}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {/* Example Queries */}
                    <div className="mt-8 space-y-3">
                        <h3 className="text-sm font-medium text-gray-600">Example questions you can ask:</h3>
                        <div className="space-y-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="text-left justify-start h-auto p-3 text-gray-600 hover:text-teal-600 hover:border-teal-300"
                                onClick={() => setInputMessage("Can you explain the concept of neural networks?")}
                            >
                                Can you explain the concept of neural networks?
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="text-left justify-start h-auto p-3 text-gray-600 hover:text-teal-600 hover:border-teal-300"
                                onClick={() => setInputMessage("Can you give me a real-world example?")}
                            >
                                Can you give me a real-world example?
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="text-left justify-start h-auto p-3 text-gray-600 hover:text-teal-600 hover:border-teal-300"
                                onClick={() => setInputMessage("Find me the best rooftop restaurants")}
                            >
                                Find me the best rooftop restaurants
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
                    <div className="max-w-4xl mx-auto">
                        <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Sparkles className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1 flex items-center bg-gray-50 rounded-full border border-gray-200 focus-within:border-teal-300 focus-within:ring-1 focus-within:ring-teal-300">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Ask for a restaurant, dish..."
                                    className="flex-1 bg-transparent px-4 py-3 focus:outline-none placeholder-gray-500"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="bg-teal-600 hover:bg-teal-700 rounded-full m-1 w-8 h-8"
                                    disabled={!inputMessage.trim()}
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIAssistant
