import React, { useEffect, useRef } from 'react';
import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';

interface Props {
  name: string;
  initialHtml?: string;
  placeholder?: string;
}

/**
 * WYSIWYG rich-text editor backed by TipTap. Renders a visible toolbar,
 * a contenteditable surface, and a hidden textarea named {name} that
 * always holds the current HTML so the surrounding <form> submits it.
 *
 * On image insert via the toolbar, files are uploaded to Supabase via
 * /api/admin/upload and the returned public URL is inserted at the
 * caret. No server-side markdown parsing is needed — posts are stored
 * as HTML and rendered with set:html on the public side.
 */
export default function RichTextEditor({ name, initialHtml = '', placeholder }: Props) {
  const hiddenRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
      Link.configure({ openOnClick: false, autolink: true }),
      Image.configure({ inline: false, allowBase64: false }),
      Placeholder.configure({ placeholder: placeholder ?? 'Start writing…' }),
    ],
    content: initialHtml || '<p></p>',
    editorProps: {
      attributes: {
        class: 'tiptap-editor max-w-none min-h-[380px] px-4 py-3 focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      if (hiddenRef.current) hiddenRef.current.value = editor.getHTML();
    },
  });

  // Keep the hidden textarea seeded even before the first edit.
  useEffect(() => {
    if (hiddenRef.current && editor) hiddenRef.current.value = editor.getHTML();
  }, [editor]);

  const insertImageUrl = (url: string) => {
    editor?.chain().focus().setImage({ src: url }).run();
  };

  const onPickImage = async (file: File) => {
    const form = new FormData();
    form.append('file', file);
    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? 'Upload failed');
      insertImageUrl(data.url);
    } catch (err) {
      alert(`Image upload failed: ${err instanceof Error ? err.message : 'unknown error'}`);
    }
  };

  const addLink = () => {
    const prev = editor?.getAttributes('link').href as string | undefined;
    const url = window.prompt('Link URL', prev ?? 'https://');
    if (url === null) return;
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  if (!editor) return null;

  return (
    <div className="rounded-lg border border-slate-300 bg-white overflow-hidden">
      <Toolbar editor={editor} onClickLink={addLink} onClickImage={() => fileInputRef.current?.click()} />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onPickImage(f);
          e.target.value = '';
        }}
      />
      <EditorContent editor={editor} />
      <textarea ref={hiddenRef} name={name} defaultValue={initialHtml} hidden readOnly />
    </div>
  );
}

function Toolbar({
  editor,
  onClickLink,
  onClickImage,
}: {
  editor: Editor;
  onClickLink: () => void;
  onClickImage: () => void;
}) {
  const btn = (active: boolean) =>
    `px-2.5 py-1.5 rounded-md text-sm font-semibold transition-colors ${
      active ? 'bg-blue-100 text-blue-700' : 'text-slate-700 hover:bg-slate-100'
    }`;

  return (
    <div className="flex items-center flex-wrap gap-1 px-2 py-2 border-b border-slate-200 bg-slate-50">
      <button type="button" className={btn(editor.isActive('bold'))} onClick={() => editor.chain().focus().toggleBold().run()} title="Bold">
        <span className="font-bold">B</span>
      </button>
      <button type="button" className={btn(editor.isActive('italic'))} onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic">
        <span className="italic">I</span>
      </button>
      <button type="button" className={btn(editor.isActive('strike'))} onClick={() => editor.chain().focus().toggleStrike().run()} title="Strikethrough">
        <span className="line-through">S</span>
      </button>

      <span className="w-px h-5 bg-slate-300 mx-1" />

      <button type="button" className={btn(editor.isActive('heading', { level: 2 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
      <button type="button" className={btn(editor.isActive('heading', { level: 3 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
      <button type="button" className={btn(editor.isActive('paragraph'))} onClick={() => editor.chain().focus().setParagraph().run()}>P</button>

      <span className="w-px h-5 bg-slate-300 mx-1" />

      <button type="button" className={btn(editor.isActive('bulletList'))} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bulleted list">• List</button>
      <button type="button" className={btn(editor.isActive('orderedList'))} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Numbered list">1. List</button>
      <button type="button" className={btn(editor.isActive('blockquote'))} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Quote">❝</button>

      <span className="w-px h-5 bg-slate-300 mx-1" />

      <button type="button" className={btn(editor.isActive('link'))} onClick={onClickLink} title="Link">🔗 Link</button>
      <button type="button" className={btn(false)} onClick={onClickImage} title="Insert image">🖼 Image</button>

      <span className="w-px h-5 bg-slate-300 mx-1" />

      <button type="button" className={btn(false)} onClick={() => editor.chain().focus().undo().run()} title="Undo">↶</button>
      <button type="button" className={btn(false)} onClick={() => editor.chain().focus().redo().run()} title="Redo">↷</button>
    </div>
  );
}
