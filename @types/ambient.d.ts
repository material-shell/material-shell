/**
 * Ambient module declarations for the GNOME Shell runtime.
 *
 * `@girs/gnome-shell` declares every `resource:///org/gnome/shell/**` module and
 * pulls in the `@girs/*` packages that declare the `gi://*` namespaces, both
 * generated from the GIR of the GNOME release the package version matches.
 * Keep the package version pinned to the targeted shell version.
 */
import '@girs/gnome-shell/ambient';
import '@girs/gnome-shell/extensions/global';
import '@girs/soup-3.0/ambient';
import '@girs/giounix-2.0/ambient';
