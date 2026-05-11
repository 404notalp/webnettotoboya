/**
 * Cloudflare Worker: Markdown for Agents
 * AI ajanlarının (ChatGPT, Gemini vb.) HTML yerine Markdown formatında içerik almasını sağlar
 */
export default {
  async fetch(request, env, ctx) {
    const accept = request.headers.get('Accept') || '';

    // Sadece Markdown talep edildiğinde çalış
    if (accept.includes('text/markdown')) {
      try {
        // Orijinal isteği al
        const url = new URL(request.url);
        const response = await fetch(request);
        const html = await response.text();

        // HTML'i Markdown'a dönüştür
        let markdown = html
          // Headings
          .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n\n')
          .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n\n')
          .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n\n')
          .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n\n')
          .replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n\n')
          .replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n\n')
          // Paragraphs
          .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
          // Lists
          .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
          .replace(/<ul[^>]*>/gi, '\n')
          .replace(/<\/ul>/gi, '\n')
          .replace(/<ol[^>]*>/gi, '\n')
          .replace(/<\/ol>/gi, '\n')
          // Links
          .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
          // Bold & Italic
          .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
          .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')
          .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
          .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')
          // Code
          .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
          .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '\n```\n$1\n```\n')
          // Images
          .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2]($1)')
          .replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*>/gi, '![$1]($2)')
          .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, '![]($1)')
          // Div/Section cleanup
          .replace(/<div[^>]*>/gi, '\n')
          .replace(/<\/div>/gi, '\n')
          .replace(/<section[^>]*>/gi, '\n')
          .replace(/<\/section>/gi, '\n')
          .replace(/<br\s*\/?>/gi, '\n')
          // Remove all remaining HTML tags
          .replace(/<[^>]+>/g, '')
          // Decode HTML entities
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
          .replace(/&#39;/g, "'")
          // Clean up multiple newlines
          .replace(/\n{3,}/g, '\n\n')
          .trim();

        // Token sayısını tahmin et (yaklaşık 4 karakter = 1 token)
        const tokenCount = Math.ceil(markdown.length / 4);

        return new Response(markdown, {
          status: 200,
          headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'x-markdown-tokens': tokenCount.toString(),
            'Cache-Control': 'public, max-age=3600'
          }
        });
      } catch (error) {
        return new Response('Error converting to markdown', { status: 500 });
      }
    }

    // Markdown talep edilmediyse normal HTML döndür
    return fetch(request);
  }
};