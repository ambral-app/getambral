"""Errors raised by the Ambral SDK."""


class AmbralError(RuntimeError):
    """Deterministic failure (client error, malformed response). Not retried."""
