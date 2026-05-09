type LoaderProps = { src: string; width: number; quality?: number }

export default function imageLoader({ src }: LoaderProps): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return `${base}${src}`
}
