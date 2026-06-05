export default function Footer() {
  return (
    <footer className="border-t border-border pb-28 pt-8">
      <div className="mx-auto max-w-2xl px-4 flex items-center justify-between">
        <p className="font-mono-code text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Muhammad Ilyas
        </p>
        <p className="font-mono-code text-xs text-muted-foreground">
          bikin.site
        </p>
      </div>
    </footer>
  );
}
