import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function App() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Type or paste your text here...</p>',
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none w-full text-left',
      },
    },
  })

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Text Editor Area */}
      <main className="flex-grow p-4 overflow-y-auto">
        <div
          className="w-full min-h-[500px] border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 cursor-text overflow-hidden"
          onClick={() => editor?.commands.focus('end')}
        >
          <EditorContent editor={editor} className="h-full p-4" />
        </div>
      </main>

      {/* Chat Input Area */}
      <footer className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center space-x-2 h-12">
          {/* Explicitly setting box-border and ensuring height parity */}
          <input
            type="text"
            className="flex-grow h-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 box-border leading-none"
            placeholder="Type instructions for the AI..."
          />
          <button className="flex items-center justify-center h-full aspect-square bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium shrink-0">
            Send
          </button>
          <button className="flex items-center justify-center px-4 h-full bg-gray-200 rounded-lg hover:bg-gray-300 font-medium shrink-0">
            Speak
          </button>
        </div>
      </footer>
    </div>
  )
}
