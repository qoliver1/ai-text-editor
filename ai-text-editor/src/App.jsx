import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, Heading1, Heading2, List, ListOrdered, Quote } from 'lucide-react'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b border-gray-300">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className={`p-2 rounded ${editor.isActive('bold') ? 'is-active bg-gray-200' : ''}`}>
        <Bold size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-2 rounded ${editor.isActive('italic') ? 'is-active bg-gray-200' : ''}`}>
        <Italic size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'is-active bg-gray-200' : ''}`}>
        <Heading1 size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'is-active bg-gray-200' : ''}`}>
        <Heading2 size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`p-2 rounded ${editor.isActive('bulletList') ? 'is-active bg-gray-200' : ''}`}>
        <List size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`p-2 rounded ${editor.isActive('orderedList') ? 'is-active bg-gray-200' : ''}`}>
        <ListOrdered size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`p-2 rounded ${editor.isActive('blockquote') ? 'is-active bg-gray-200' : ''}`}>
        <Quote size={16} />
      </button>
    </div>
  )
}

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
      <MenuBar editor={editor} />
      <main className="flex-grow p-4 overflow-y-auto">
        <div
          className="w-full min-h-[500px] border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 cursor-text overflow-hidden"
          onClick={() => editor?.commands.focus('end')}
        >
          <EditorContent editor={editor} className="h-full p-4" />
        </div>
      </main>

      <footer className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center space-x-2 h-12">
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
