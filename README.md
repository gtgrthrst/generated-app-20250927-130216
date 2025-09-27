# Metron: Minimalist Unit Converter

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/gtgrthrst/generated-app-20250927-125705)

> A minimalist-punk styled, lightning-fast unit converter for common measurements, built for clarity and efficiency.

## About The Project

Metron is a hyper-focused, minimalist-punk unit converter designed for speed, clarity, and aesthetic precision. The application provides a single, elegant interface for converting between the most common units across categories like Length, Mass, Temperature, Volume, and Data.

The visual style is a deliberate fusion of stark minimalism (monochrome palette, generous whitespace, grid-based layout) and punk ethos (raw, functional typography, a single shocking accent color, hard edges, and zero ornamentation). The entire experience is designed to be immediate and frictionless: users can type in a value and see the conversion happen in real-time. It's a tool built to be both beautiful and brutally efficient.

## Key Features

-   **Real-time Conversion**: See results instantly as you type.
-   **Multiple Categories**: Convert units for Length, Mass, Temperature, Volume, and Data.
-   **Minimalist-Punk UI**: A unique aesthetic that is both visually striking and highly functional.
-   **Responsive Design**: Flawless experience across all device sizes, from mobile to desktop.
-   **Keyboard-First**: Designed for efficient use without needing to touch a mouse.
-   **Lightweight & Fast**: Built with modern tools for optimal performance.

## Technology Stack

This project is built with a modern, high-performance tech stack:

-   **Framework**: [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) & [Workers](https://workers.cloudflare.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/metron_unit_converter.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd metron_unit_converter
    ```
3.  Install dependencies using Bun:
    ```sh
    bun install
    ```

## Development

To run the application in development mode, use the following command. This will start a local server, typically on `http://localhost:3000`.

```sh
bun run dev
```

The server supports hot-reloading, so any changes you make to the source code will be reflected in the browser instantly.

## Deployment

This project is configured for seamless deployment to the Cloudflare network.

To deploy your application, simply run the following command:

```sh
bun run deploy
```

This command will build the application and deploy it using the Wrangler CLI to your Cloudflare account.

Alternatively, you can deploy directly from your GitHub repository with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/gtgrthrst/generated-app-20250927-125705)

## License

Distributed under the MIT License. See `LICENSE` for more information.