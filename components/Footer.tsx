export default function Footer() {
  return (
    <footer className="mt-10 text-center text-zinc-500 dark:text-zinc-400 pb-24 border-t border-zinc-200 dark:border-zinc-800 pt-6">
      <p>
        &copy; {new Date().getFullYear()} Muhammad Ilyas. All rights reserved.
      </p>
    </footer>
  );
}