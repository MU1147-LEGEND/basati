// Server-side proxy to force-download files (useful for mobile browsers)
// Usage: GET /api/download?id=FILE_ID&filename=optional-name.pdf
import { headers as nextHeaders } from 'next/headers';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const filename = searchParams.get('filename') || `${id}.pdf`;

        if (!id) {
            return new Response('Missing file id', { status: 400 });
        }

        // Google Drive direct download URL
        const driveUrl = `https://drive.google.com/uc?export=download&id=${encodeURIComponent(
            id
        )}`;

        const res = await fetch(driveUrl);

        if (!res.ok) {
            return new Response('Failed to fetch file from Google Drive', {
                status: 502,
            });
        }

        // Preserve content-type from Drive if available
        const contentType = res.headers.get('content-type') ||
            'application/octet-stream';

        const responseHeaders = new Headers();
        responseHeaders.set('Content-Type', contentType);
        // Force download
        responseHeaders.set(
            'Content-Disposition',
            `attachment; filename="${filename}"`
        );

        // Stream the response body back to the client
        return new Response(res.body, {
            status: 200,
            headers: responseHeaders,
        });
    } catch (err) {
        console.error('download proxy error', err);
        return new Response('Internal server error', { status: 500 });
    }
}
